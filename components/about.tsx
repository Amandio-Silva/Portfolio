import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="gradient-text">Sobre Mim</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <img
                  src="/professional-developer-portrait.png"
                  alt="Amândio Silva"
                  className="w-72 h-72 rounded-full object-cover border-4 border-primary/20"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Sou um desenvolvedor apaixonado por tecnologia, atualmente estudando Informática na
                <span className="text-primary font-semibold"> UMAIA</span> e participando do programa intensivo da
                <span className="text-primary font-semibold"> 42 Porto</span>.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Minha jornada no desenvolvimento começou com C e C++, expandindo para tecnologias web modernas como
                React, Node.js e Next.js. Adoro resolver problemas complexos e criar soluções elegantes.
              </p>

              <div className="grid gap-4 mt-8">
                <Card className="border-primary/20">
                  <CardContent className="flex items-center gap-4 p-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Educação</h3>
                      <p className="text-sm text-muted-foreground">UMAIA & 42 Porto</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="flex items-center gap-4 p-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Localização</h3>
                      <p className="text-sm text-muted-foreground">Maia, Portugal</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
