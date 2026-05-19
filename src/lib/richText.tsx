import { ReactNode } from 'react';

type Renderer = (content: string | null, key: number) => ReactNode;

const DEFAULTS: Record<string, Renderer> = {
    b:      (c, k) => <b key={k}>{c}</b>,
    i:      (c, k) => <i key={k}>{c}</i>,
    strong: (c, k) => <strong key={k}>{c}</strong>,
    br:     (_, k) => <br key={k} />,
};

function parse(text: string, map: Record<string, Renderer>): ReactNode[] {
    const tags = Object.keys(map).join('|');
    const re = new RegExp(
        `<(${tags})>([\\s\\S]*?)<\\/\\1>|<(${tags})\\s*/?>`,
        'gi'
    );

    const nodes: ReactNode[] = [];
    let cursor = 0;
    let key = 0;

    for (const m of text.matchAll(re)) {
        if (m.index! > cursor) nodes.push(text.slice(cursor, m.index));

        if (m[1]) {
            nodes.push(map[m[1].toLowerCase()](m[2], key++));
        } else {
            nodes.push(map[m[3].toLowerCase()](null, key++));
        }

        cursor = m.index! + m[0].length;
    }

    if (cursor < text.length) nodes.push(text.slice(cursor));
    return nodes;
}

/**
 * Парсит строку с HTML-тегами и маркерами, возвращает ReactNode[].
 *
 * tags   — кастомные теги: { blue: (c, k) => <span key={k}>{c}</span> }
 * markers — символы-обёртки: { '%': (c, k) => <span key={k} className="blue">{c}</span> }
 *
 * @example
 * // Тег
 * rich('Цена <b>990₽</b>', { b: (c,k) => <b key={k}>{c}</b> })
 *
 * // Маркер
 * rich('Управляем %репутацией%', undefined, {
 *   '%': (c, k) => <span key={k} className={s.blue}>{c}</span>
 * })
 */
export function rich(
    text: string,
    tags?: Record<string, Renderer>,
    markers?: Record<string, Renderer>,
): ReactNode[] {
    const extraTags: Record<string, Renderer> = {};
    let processed = text;

    for (const [marker, renderer] of Object.entries(markers ?? {})) {
        const internalTag = `_m${marker.charCodeAt(0)}`;
        const escaped = marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        processed = processed.replace(
            new RegExp(`${escaped}([^${escaped}]*)${escaped}`, 'g'),
            `<${internalTag}>$1</${internalTag}>`
        );
        extraTags[internalTag] = renderer;
    }

    return parse(processed, { ...DEFAULTS, ...extraTags, ...tags });
}
