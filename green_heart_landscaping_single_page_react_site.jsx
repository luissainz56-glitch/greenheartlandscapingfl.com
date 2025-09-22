import React from 'react';

// Green Heart Landscaping - Single-file React component (Tailwind + shadcn/ui)
// Default export: <GreenHeartLanding />

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Calendar } from 'lucide-react';

export default function GreenHeartLanding() {
  const phone = '(941) 928-5905';
  const businessName = 'GREEN HEART LANDSCAPING';
  const calendlyUrl = 'https://calendly.com/greenheart/servicio'; // replace with your Calendly

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-slate-900">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-md">
            GH
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight">{businessName}</h1>
            <p className="text-sm text-slate-600">Servicios profesionales de paisajismo y mantenimiento</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-emerald-700">
            <Phone className="w-4 h-4" /> {phone}
          </a>
          <a href={calendlyUrl} target="_blank" rel="noreferrer">
            <Button>Agendar cita</Button>
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight mb-4">Transformamos tu espacio exterior</h2>
            <p className="text-lg text-slate-700 mb-6">Diseño, instalación y mantenimiento de jardines. Césped, riego, poda, muros, iluminación y más — servicios personalizados para residencias y negocios en Sarasota y alrededores.</p>
            <div className="flex items-center gap-3">
              <a href={calendlyUrl} target="_blank" rel="noreferrer">
                <Button className="mr-2">Reservar cita</Button>
              </a>
              <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-sm font-medium text-emerald-700">Llámanos: {phone}</a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded shadow-sm text-center">
                <div className="text-2xl font-bold">12+</div>
                <div className="text-xs text-slate-500">Años de experiencia</div>
              </div>
              <div className="p-3 bg-white rounded shadow-sm text-center">
                <div className="text-2xl font-bold">250+</div>
                <div className="text-xs text-slate-500">Proyectos completados</div>
              </div>
              <div className="p-3 bg-white rounded shadow-sm text-center">
                <div className="text-2xl font-bold">3</div>
                <div className="text-xs text-slate-500">Equipos disponibles</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-80 bg-emerald-100 rounded-xl overflow-hidden shadow-md">
              {/* Placeholder image - replace with real project photos */}
              <img src="/images/landscape-hero.jpg" alt="Proyecto de landscaping" className="object-cover w-full h-full" />
            </div>
            <Card className="absolute -bottom-6 right-6 w-72">
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-50 rounded">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Atendemos en:</div>
                    <div className="text-xs text-slate-500">Sarasota, Ruskin, y áreas cercanas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="py-12">
          <h3 className="text-2xl font-bold mb-6">Nuestros servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard title="Diseño de jardines" desc="Planos 2D/3D, selección de plantas, renderizados y presupuesto detallado." />
            <ServiceCard title="Instalación de césped" desc="Instalación de zoysia, St. Augustine (Floratam) y mantenimiento inicial." />
            <ServiceCard title="Mantenimiento" desc="Corte, fertilización, poda, control de malezas y soluciones de riego." />
            <ServiceCard title="Riego automático" desc="Diseño e instalación de sistemas de riego eficientes con programación inteligente." />
            <ServiceCard title="Hardscape" desc="Caminos, patios, muros y pérgolas con materiales duraderos." />
            <ServiceCard title="Iluminación exterior" desc="Iluminación LED para seguridad y embellecimiento nocturno." />
          </div>
        </section>

        {/* Portfolio */}
        <section className="py-12">
          <h3 className="text-2xl font-bold mb-6">Proyectos recientes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img src={`/images/project-${i + 1}.jpg`} alt={`Proyecto ${i + 1}`} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="font-semibold">Proyecto {i + 1}</div>
                  <div className="text-xs text-slate-500">Instalación completa de césped y riego</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / Quote Form */}
        <section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold mb-4">Solicita una cotización gratuita</h3>
              <p className="text-slate-700 mb-6">Déjanos tus datos y una breve descripción del trabajo. Te contactamos y acordamos una visita para medir y cotizar sin compromiso.</p>

              <form action={`mailto:greenheart@example.com`} method="post" encType="text/plain" className="space-y-4">
                <div>
                  <Label>Nombre</Label>
                  <Input required placeholder="Tu nombre" />
                </div>
                <div>
                  <Label>Teléfono</Label>
                  <Input required placeholder={phone} />
                </div>
                <div>
                  <Label>Mensaje</Label>
                  <Textarea placeholder="Cuéntanos sobre el terreno, tamaño aproximado, servicios que necesitas" rows={4} />
                </div>
                <div className="flex items-center gap-3">
                  <Button type="submit">Enviar solicitud</Button>
                  <a href={calendlyUrl} target="_blank" rel="noreferrer">
                    <Button variant="outline">Agendar visita <Calendar className="w-4 h-4 ml-2 inline" /></Button>
                  </a>
                </div>
              </form>

            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Contacto</h4>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-sm"><strong>Tel:</strong> <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-emerald-700">{phone}</a></p>
                <p className="text-sm mt-2"><strong>Email:</strong> <a href="mailto:greenheart@example.com" className="text-emerald-700">greenheart@example.com</a></p>
                <p className="text-sm mt-2">Atendemos en Sarasota, Ruskin y zonas cercanas.</p>
                <div className="mt-4">
                  <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18" className="w-full h-48 rounded" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="mt-12 bg-emerald-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="font-bold">{businessName}</div>
            <div className="text-sm">Tel: {phone} · Licensed & Insured</div>
          </div>
          <div className="mt-4 md:mt-0 text-sm">© {new Date().getFullYear()} {businessName}. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}
