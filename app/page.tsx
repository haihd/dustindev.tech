import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black relative">
      <Card className="w-full h-[920px] bg-black/[0.96] absolute bottom-0 overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
        />
        
        <div className="flex h-full">
          {/* Left content */}
          <div className="w-1/3 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              hi, i&apos;m dustin
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              i love code and tech stuffs. check out my <a href="http://portfolio.dustindev.tech">portfolio</a>.
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
