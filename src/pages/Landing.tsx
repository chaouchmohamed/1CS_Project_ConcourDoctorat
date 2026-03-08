import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, FileCheck, CheckCircle2, Layout, Globe, Zap } from 'lucide-react';
import { Button, Card } from '../components/UI';
import { ROUTES, APP_NAME } from '../constants';
import { motion } from 'motion/react';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-accent rounded-md flex items-center justify-center text-white font-bold">D</div>
            <span className="font-bold text-xl text-primary-accent">{APP_NAME}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to={ROUTES.LOGIN}>
              <Button variant="ghost" size="sm">Sign in</Button>
            </Link>
            <Link to={ROUTES.REGISTER}>
              <Button size="sm">Request demo</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Subtle diagonal stripe */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface/10 -skew-x-12 translate-x-1/4 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
                Secure & Automated <br />
                <span className="text-primary-accent">Doctoral Concours</span> Management
              </h1>
              <p className="text-xl text-muted mb-8 max-w-lg">
                The institutional platform for universities to manage entrance exams with absolute integrity, from candidate import to final deliberation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={ROUTES.REGISTER}>
                  <Button size="lg" className="gap-2">
                    Get started <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link to={ROUTES.LOGIN}>
                  <Button variant="secondary" size="lg">Sign in</Button>
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-8 opacity-50 grayscale">
                <div className="flex items-center gap-2 font-semibold">
                  <Globe size={24} /> University of Algiers
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <Zap size={24} /> USTHB
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-lg shadow-2 border border-border p-4 transform hover:-translate-y-2 transition-transform duration-500">
                <img 
                  src="https://picsum.photos/seed/dashboard/800/600" 
                  alt="Dashboard Preview" 
                  className="rounded-md w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 z-20 bg-surface rounded-lg shadow-2 border border-border p-4 w-64 transform hover:scale-105 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center text-success">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold">Attendance Sync</p>
                    <p className="text-[10px] text-muted">Room A102 • Just now</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-white rounded-full w-full"></div>
                  <div className="h-2 bg-white rounded-full w-3/4"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Built for Institutional Excellence</h2>
            <p className="text-muted max-w-2xl mx-auto">Everything you need to run a high-stakes entrance exam with confidence and transparency.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Automated Import",
                desc: "Seamlessly import thousands of candidates from CSV. Automatic validation and duplicate detection."
              },
              {
                icon: Shield,
                title: "Offline-friendly PWA",
                desc: "Supervisors mark attendance on tablets even without internet. Automatic sync when back online."
              },
              {
                icon: FileCheck,
                title: "Double-blind Correction",
                desc: "Anonymized grading workflow with automated discrepancy detection and third-corrector assignment."
              }
            ].map((feature, i) => (
              <Card key={i} variant="surface" className="p-8 hover:shadow-2 transition-shadow">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary-accent mb-6 shadow-1">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">The Concours Lifecycle</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden lg:block"></div>
            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Import", desc: "Register candidates & assign rooms" },
                { step: "02", title: "Anonymize", desc: "Generate secure codes & scan copies" },
                { step: "03", title: "Correct", desc: "Double-blind grading & arbitration" },
                { step: "04", title: "Deliberate", desc: "Final ranking & PV generation" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 text-center">
                  <div className="w-12 h-12 bg-primary-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold ring-8 ring-white">
                    {item.step}
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-small text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary-accent rounded flex items-center justify-center text-white font-bold text-xs">D</div>
              <span className="font-bold text-lg text-primary-accent">{APP_NAME}</span>
            </div>
            <div className="flex gap-8 text-small text-muted">
              <Link to="#" className="hover:text-primary-accent">Documentation</Link>
              <Link to="#" className="hover:text-primary-accent">Support</Link>
              <Link to="#" className="hover:text-primary-accent">Privacy Policy</Link>
            </div>
            <p className="text-small text-muted opacity-60">
              © 2026 {APP_NAME}. Institutional Edition.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
