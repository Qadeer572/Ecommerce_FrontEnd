'use client';
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-background to-secondary/30">
      <div className="grid w-full max-w-[1200px] gap-4 lg:grid-cols-2">
        {/* Left side - Branding */}
        <motion.div 
          className="hidden lg:flex flex-col justify-center p-10 rounded-3xl glass-morph"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-2"
            >
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-white text-xl font-bold">A</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Premium Experience</h2>
              <p className="text-muted-foreground text-balance">
                Designed with precision, built with care.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid gap-4 grid-cols-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="space-y-2 border rounded-xl p-4 bg-background/50">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-sm">01</span>
                </div>
                <h3 className="font-medium">Simplicity</h3>
                <p className="text-sm text-muted-foreground">Clean design that focuses on what matters most.</p>
              </div>
              
              <div className="space-y-2 border rounded-xl p-4 bg-background/50">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-sm">02</span>
                </div>
                <h3 className="font-medium">Precision</h3>
                <p className="text-sm text-muted-foreground">Every detail crafted with care and attention.</p>
              </div>
              
              <div className="space-y-2 border rounded-xl p-4 bg-background/50">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-sm">03</span>
                </div>
                <h3 className="font-medium">Innovation</h3>
                <p className="text-sm text-muted-foreground">Forward-thinking approach to user experience.</p>
              </div>
              
              <div className="space-y-2 border rounded-xl p-4 bg-background/50">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-sm">04</span>
                </div>
                <h3 className="font-medium">Quality</h3>
                <p className="text-sm text-muted-foreground">Premium experience from every angle.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Right side - Form */}
        <motion.div 
          className={cn(
            "flex flex-col justify-center p-6 sm:p-10 rounded-3xl bg-background border shadow-lg",
            "lg:min-h-[650px]"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mx-auto w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>
            
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AuthLayout;
