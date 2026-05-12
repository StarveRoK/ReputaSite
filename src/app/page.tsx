import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from "@/components/sections/HeroSection";
import Block2 from "@/components/sections/Block2";
import Block3 from "@/components/sections/Block3";
import Block4 from "@/components/sections/Block4";
import Block5 from "@/components/sections/Block5";
// import Block6 from "@/components/sections/Block6";
import Block7 from "@/components/sections/Block7";
import Block8 from "@/components/sections/Block8";
import Block9 from "@/components/sections/Block9";

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
            <Block7 />
            <Block8 />
            <Block9 />
            <Footer />
        </main>
    )
}