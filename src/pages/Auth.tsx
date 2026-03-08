import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Shield, UserPlus, ArrowLeft } from 'lucide-react';
import { Button, Card, Input } from '../components/UI';
import { ROUTES, APP_NAME } from '../constants';
import { motion } from 'motion/react';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-surface) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[420px] relative z-10"
      >
        <div className="text-center mb-8">
          <Link to={ROUTES.HOME} className="inline-flex items-center gap-2 text-primary-accent font-bold text-2xl mb-2">
            <div className="w-10 h-10 bg-primary-accent rounded-md flex items-center justify-center text-white">D</div>
            <span>{APP_NAME}</span>
          </Link>
          <h2 className="text-xl font-semibold text-text-primary">Sign in to your account</h2>
        </div>

        <Card className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <Input 
              label="Email Address" 
              placeholder="name@institution.edu" 
              type="email" 
              required
              icon={<Mail size={18} />}
            />
            
            <div className="space-y-1">
              <Input 
                label="Password" 
                placeholder="••••••••" 
                type={showPassword ? "text" : "password"} 
                required
                icon={<Lock size={18} />}
              />
              <div className="flex justify-end">
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-small text-muted hover:text-primary-accent flex items-center gap-1.5 transition-colors"
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  {showPassword ? "Hide" : "Show"} password
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-border text-primary-accent focus:ring-primary-accent" />
                <span className="text-small text-muted group-hover:text-text-primary transition-colors">Remember me</span>
              </label>
              <Link to={ROUTES.FORGOT_PASSWORD} className="text-small text-primary-accent hover:underline font-medium">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Sign in
            </Button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted">Or continue with</span>
              </div>
            </div>

            <Button variant="secondary" className="w-full gap-2">
              <Shield size={18} /> Sign in with SSO
            </Button>
          </form>
        </Card>

        <p className="text-center mt-8 text-small text-muted">
          Don't have an account?{' '}
          <Link to={ROUTES.REGISTER} className="text-primary-accent font-semibold hover:underline">
            Request access
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-surface) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[500px] relative z-10"
      >
        <div className="mb-8">
          <Link to={ROUTES.LOGIN} className="inline-flex items-center gap-1.5 text-muted hover:text-primary-accent transition-colors text-small mb-4">
            <ArrowLeft size={16} /> Back to login
          </Link>
          <h2 className="text-2xl font-bold text-text-primary">Request Institution Access</h2>
          <p className="text-muted">Register your university or department for ConcoursDoctor.</p>
        </div>

        <Card className="p-8">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input label="First Name" placeholder="Jean" required />
              <Input label="Last Name" placeholder="Dupont" required />
            </div>
            
            <Input label="Institutional Email" placeholder="j.dupont@univ-alger.dz" type="email" required />
            
            <div className="space-y-1.5">
              <label className="text-small font-medium text-text-primary block">Primary Role</label>
              <select className="input-field appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] bg-no-repeat">
                <option value="ADMIN">Administrator</option>
                <option value="COORDINATOR">Coordinator</option>
                <option value="CFD_HEAD">CFD Head</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Input label="Password" type="password" required />
              <Input label="Confirm Password" type="password" required />
            </div>

            <div className="p-3 bg-surface/20 rounded-md border border-border">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2">Password Strength</p>
              <div className="flex gap-1 mb-1">
                <div className="h-1 flex-1 bg-success rounded-full"></div>
                <div className="h-1 flex-1 bg-success rounded-full"></div>
                <div className="h-1 flex-1 bg-border rounded-full"></div>
                <div className="h-1 flex-1 bg-border rounded-full"></div>
              </div>
              <p className="text-[11px] text-muted">Use at least 8 characters, one number and one uppercase letter.</p>
            </div>

            <label className="flex items-start gap-3 cursor-pointer group pt-2">
              <input type="checkbox" className="mt-1 w-4 h-4 rounded border-border text-primary-accent focus:ring-primary-accent" required />
              <span className="text-small text-muted group-hover:text-text-primary transition-colors">
                I accept the <Link to="#" className="text-primary-accent hover:underline">Terms of Service</Link> and <Link to="#" className="text-primary-accent hover:underline">Privacy Policy</Link>.
              </span>
            </label>

            <Button type="submit" className="w-full gap-2">
              <UserPlus size={18} /> Create account
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};
