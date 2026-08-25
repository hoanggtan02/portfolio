import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Float, Sphere, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Send } from 'lucide-react';

// ==========================================
// 1. COMPONENTS 3D (THREE.JS / R3F)
// ==========================================

// Vật thể 3D tương tác chính ở Hero Section
function HeroAnimatedShape() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.4}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// Canvas 3D background cho Hero Section
function Hero3DCanvas() {
  return (
    <div className="h-[450px] w-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#ec4899" intensity={1} />
        <HeroAnimatedShape />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  );
}

// ==========================================
// 2. DỮ LIỆU PORTFOLIO (Đổi thông tin của bạn tại đây)
// ==========================================

const PERSONAL_INFO = {
  name: "Nguyễn Văn A",
  role: "Fullstack Web Developer",
  about: "Lập trình viên đam mê tối ưu hóa hiệu năng, xây dựng hệ thống web hiện đại và trải nghiệm người dùng ấn tượng với React, PHP, MySQL & 3D Web Graphics.",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "contact@domain.com"
};

const SKILLS = ["React.js", "Next.js", "PHP", "MySQL", "Tailwind CSS", "Three.js", "RESTful API", "Git & Docker"];

const EXPERIENCES = [
  {
    period: "2024 - Hiện tại",
    role: "Senior Fullstack Developer",
    company: "Công ty Công Nghệ ABC",
    desc: "Phát triển hệ thống quản lý nội bộ, tích hợp API thanh toán và tối ưu tốc độ tải trang tăng 40%."
  },
  {
    period: "2022 - 2024",
    role: "Frontend Developer",
    company: "Agency Digital XYZ",
    desc: "Xây dựng hơn 15+ giao diện Website E-commerce, Landing Page tương tác cao cho khách hàng doanh nghiệp."
  }
];

const PROJECTS = [
  {
    title: "E-Commerce System 3D",
    desc: "Hệ thống bán hàng trực tuyến tích hợp xem mô hình sản phẩm 3D trực quan.",
    tags: ["React", "Three.js", "Tailwind"],
    demo: "#",
    github: "#"
  },
  {
    title: "Realtime Dashboard",
    desc: "Hệ thống quản lý doanh thu và nhân sự thời gian thực với biểu đồ tương tác.",
    tags: ["PHP", "MySQL", "Chart.js"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI Content Generator",
    desc: "Công cụ hỗ trợ tạo bài viết tự động ứng dụng LLM API và giao diện tối giản.",
    tags: ["Next.js", "API Integration", "Tailwind"],
    demo: "#",
    github: "#"
  }
];

// ==========================================
// 3. MAIN PORTFOLIO APP
// ==========================================

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            DevPortfolio.3D
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-indigo-400 transition">Giới thiệu</a>
            <a href="#experience" className="hover:text-indigo-400 transition">Kinh nghiệm</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Dự án</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Liên hệ</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24 space-y-32 pb-20">
        
        {/* --- HERO SECTION --- */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Xin chào, tôi là
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-2xl font-bold text-indigo-400">
              {PERSONAL_INFO.role}
            </h2>
            <p className="text-slate-400 leading-relaxed text-base">
              {PERSONAL_INFO.about}
            </p>

            {/* Kỹ năng (Badges) */}
            <div className="flex flex-wrap gap-2 pt-2">
              {SKILLS.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs font-medium text-slate-300">
                  {skill}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-lg shadow-indigo-600/30">
                <Mail size={18} /> Liên hệ ngay
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 transition">
                <Github size={20} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Canvas 3D Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full" />
            <Hero3DCanvas />
            <p className="text-center text-xs text-slate-500 italic mt-2">
              * Rê chuột hoặc vuốt để xoay tương tác vật thể 3D
            </p>
          </motion.div>
        </section>

        {/* --- KINH NGHIỆM LÀM VIỆC --- */}
        <section id="experience" className="space-y-12">
          <div className="flex items-center gap-3">
            <Briefcase className="text-indigo-400" size={28} />
            <h2 className="text-3xl font-bold">Kinh Nghiệm Làm Việc</h2>
          </div>

          <div className="relative border-l-2 border-slate-800 ml-4 pl-8 space-y-10">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950" />
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">{exp.period}</span>
                <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                <h4 className="text-sm font-medium text-slate-400 mb-2">{exp.company}</h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- DỰ ÁN ĐÃ LÀM --- */}
        <section id="projects" className="space-y-12">
          <div className="flex items-center gap-3">
            <Code className="text-indigo-400" size={28} />
            <h2 className="text-3xl font-bold">Dự Án Nổi Bật</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition duration-300 shadow-xl"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition">{proj.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{proj.desc}</p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono px-2.5 py-1 bg-slate-800 text-indigo-300 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-slate-800/60">
                    <a href={proj.demo} className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-indigo-400 transition">
                      <ExternalLink size={14} /> Demo Live
                    </a>
                    <a href={proj.github} className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-indigo-400 transition">
                      <Github size={14} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FORM LIÊN HỆ --- */}
        <section id="contact" className="space-y-8 max-w-2xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Gửi Tin Nhắn</h2>
            <p className="text-slate-400 text-sm">Bạn có dự án hoặc cơ hội hợp tác? Đừng ngần ngại liên hệ với tôi.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-slate-900/40 p-8 rounded-2xl border border-slate-800">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Họ & Tên</label>
              <input type="text" placeholder="Nguyễn Văn A" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Email</label>
              <input type="email" placeholder="your-email@gmail.com" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition" />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">Nội dung tin nhắn</label>
              <textarea rows={4} placeholder="Nội dung công việc..." className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition resize-none" />
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-semibold text-sm transition shadow-lg shadow-indigo-600/30">
              <Send size={16} /> Gửi Tin Nhắn
            </button>
          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Three.js & Tailwind CSS.
      </footer>
    </div>
  );
}