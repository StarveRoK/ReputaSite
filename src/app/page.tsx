import Header from '@/components/layout/Header'
import HeroSection from "@/components/sections/HeroSection";
import Block2 from "@/components/sections/Block2";
import Block3 from "@/components/sections/Block3";
import Block4 from "@/components/sections/Block4";
import Block5 from "@/components/sections/Block5";
import Block6 from "@/components/sections/Block6";

export default function HomePage() {
    return (
        <main>
            <Header />
            <HeroSection />
            <Block2 />
            <Block3 />
            <Block4 />
            <Block5 />
            {/*<Block6 />*/}
        </main>
    )
}