import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Briefcase, GraduationCap, ExternalLink, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// ==========================================
// COMPONENT NHÂN VẬT 3D TƯƠNG TÁC CHUỘT NỔI KHUNG
// ==========================================
function Interactive3DCharacter() {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setRotate({
      x: -y / 15,
      y: x / 15
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative w-full h-[520px] flex items-center justify-center perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-[360px] h-[480px] flex items-end justify-center cursor-pointer"
      >
        {/* Lớp 1: Khung Card thủy tinh phía sau */}
        <div 
          style={{ transform: "translateZ(0px)" }}
          className="absolute inset-x-2 bottom-0 top-16 rounded-3xl bg-slate-900/60 border border-indigo-500/30 backdrop-blur-md shadow-2xl shadow-indigo-950/50"
        />

        {/* Lớp 2: Quầng sáng Neon Ambient đỏ/cam/tím đằng sau */}
        <div 
          style={{ transform: "translateZ(20px)" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-indigo-600/40 via-purple-600/30 to-pink-500/20 rounded-full blur-3xl opacity-80 pointer-events-none"
        />

        {/* Lớp 3: Ảnh nhân vật PNG nổi lên trên cùng */}
        <motion.img 
          src="./assets/avatar.png" 
          alt="Thái Hoàng Tân 3D"
          style={{ transform: "translateZ(60px)" }}
          className="relative z-10 h-[500px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] pointer-events-none select-none"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
          }}
        />
      </motion.div>
    </div>
  );
}

const PERSONAL_INFO = {
  name: "Thái Hoàng Tân",
  dob: "12/10/2002",
  degree: "Cử nhân Công nghệ Thông tin - Đại học Sài Gòn (SGU)",
  role: "Fullstack Web Developer & System Architect",
  about: "Lập trình viên Web Fullstack chuyên sâu về kiến trúc hệ thống quản trị doanh nghiệp (ERP, CRM), tối ưu hóa trải nghiệm bán hàng thương mại điện tử và tự động hóa quy trình nghiệp vụ (Workflow Automation). Đam mê ứng dụng công nghệ mới và AI vào giải quyết bài toán thực tế.",
  github: "https://github.com/hoanggtan02"
};

const EXPERIENCES = [
  {
    period: "12/2025 - Hiện tại",
    role: "Web Developer",
    company: "Công ty TNHH Tin học Thành Nhân (Thành Nhân TNC)",
    desc: "Chịu trách nhiệm nâng cấp, bảo trì và phát triển nền tảng E-commerce bán hàng. Thiết kế các giải pháp tự động hóa quy trình vận hành nội bộ, chuẩn hóa luồng xử lý dữ liệu thủ công giúp nâng cao năng suất và tối ưu trải nghiệm người dùng."
  },
  {
    period: "09/2024 - 12/2025",
    role: "PHP Developer",
    company: "Công ty TNHH ECLO",
    desc: "Trực tiếp phân tích, thiết kế cơ sở dữ liệu và lập trình mô-đun cho các phân hệ ERP & CRM phức tạp. Xây dựng cấu trúc RESTful API chuẩn mực, tối ưu hóa truy vấn dữ liệu lớn và đáp ứng bài toán quản trị luồng công việc linh hoạt."
  },
  {
    period: "04/2024 - 08/2024",
    role: "Trợ giảng Trí tuệ Nhân tạo (AI Teaching Assistant)",
    company: "Công ty TNHH AI Education",
    desc: "Hỗ trợ giảng dạy, hướng dẫn thực hành và truyền đạt kiến thức nền tảng về Trí tuệ nhân tạo (AI) cho học viên. Đồng thời trực tiếp tham gia hỗ trợ giải đáp kỹ thuật và phát triển tài liệu học tập."
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "Website Thương Mại Điện Tử Thành Nhân TNC",
    desc: "Tối ưu hóa hệ thống bán hàng thiết bị công nghệ.",
    image: "./assets/projects/tnc-1.jpg",
    gallery: ["./assets/projects/tnc-1.jpg", "./assets/projects/tnc-2.jpg"],
    demo: "https://www.tnc.com.vn/"
  },
  {
    id: 2,
    title: "Nền Tảng Trí Tuệ Nhân Tạo AI VMIED",
    desc: "Hệ thống tích hợp các mô hình AI phục vụ học tập, tra cứu kiến thức và xử lý dữ liệu thông minh cho người dùng.",
    image: "./assets/projects/ai-1.jpg",
    gallery: ["./assets/projects/ai-1.jpg"],
    demo: "https://ai.vmied.com/"
  },
  {
    id: 3,
    title: "Hệ Thống Quản Lý Học Tập VMIED LMS",
    desc: "Nền tảng quản lý khóa học, bài giảng và tiến độ học tập trực tuyến dành cho học viên và giảng viên.",
    image: "./assets/projects/lms-1.jpg",
    gallery: ["./assets/projects/lms-1.jpg"],
    demo: "https://lms.vmied.com/"
  },
  {
    id: 4,
    title: "Website Thương Hiệu Ngọc Hiền Pearl",
    desc: "Website giới thiệu và trưng bày các sản phẩm ngọc trai cao cấp, tối ưu trải nghiệm thương hiệu và hiển thị sản phẩm.",
    image: "./assets/projects/pearl-1.jpg",
    gallery: ["./assets/projects/pearl-1.jpg"],
    demo: "https://ngochienpearl.com/"
  },
  {
    id: 5,
    title: "Hệ Thống Quản Trị Doanh Nghiệp ERP & CRM Nội Bộ",
    desc: "Phân hệ quản trị nội bộ nâng cao: phân quyền đa tầng, quản lý nhân sự HRM, quản lý dự án, tính hoa hồng tự động và xuất báo cáo Excel.",
    image: "./assets/projects/erp-1.jpg",
    gallery: ["./assets/projects/erp-1.jpg", "./assets/projects/erp-2.jpg", "./assets/projects/erp-3.jpg"],
    demo: null
  }
];

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const openModal = (proj) => {
    setActiveProject(proj);
    setCurrentImageIdx(0);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            TanDev.Portfolio
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-indigo-400 transition">Giới thiệu</a>
            <a href="#experience" className="hover:text-indigo-400 transition">Kinh nghiệm</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Dự án</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-24 space-y-32 pb-20">
        {/* About Section */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Fullstack Software Engineer
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-xl font-semibold text-indigo-400">
              {PERSONAL_INFO.role}
            </h2>

            <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2 text-sm text-slate-300">
              <div className="flex items-center gap-2 text-indigo-300 font-medium">
                <GraduationCap size={18} />
                <span>{PERSONAL_INFO.degree}</span>
              </div>
              <div className="text-xs text-slate-400">
                Ngày sinh: <span className="text-slate-200">{PERSONAL_INFO.dob}</span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-base">
              {PERSONAL_INFO.about}
            </p>

            <div className="flex gap-4 pt-4">
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-slate-200 hover:text-white transition text-sm font-medium"
              >
                <GithubIcon className="w-5 h-5 text-indigo-400" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Interactive3DCharacter />
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <div className="flex items-center gap-3">
            <Briefcase className="text-indigo-400" size={28} />
            <h2 className="text-3xl font-bold">Kinh Nghiệm Thực Chiến</h2>
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

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="flex items-center gap-3">
            <Code className="text-indigo-400" size={28} />
            <h2 className="text-3xl font-bold">Dự Án Đã Triển Khai</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((proj) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/60 border border-slate-800/80 rounded-xl overflow-hidden flex flex-col justify-between hover:border-indigo-500/50 transition duration-300 shadow-xl"
              >
                <div>
                  <div className="h-44 overflow-hidden border-b border-slate-800/80 relative group bg-slate-950 flex items-center justify-center">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full flex items-center justify-center bg-indigo-950/30 text-indigo-400 text-xs font-mono">
                      [ Preview Image ]
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-400 transition">{proj.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{proj.desc}</p>
                  </div>
                </div>
                
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
                    <div>
                      {proj.demo ? (
                        <a 
                          href={proj.demo} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition"
                        >
                          <ExternalLink size={14} /> Link Website
                        </a>
                      ) : (
                        <span className="text-xs text-slate-500 italic">Hệ thống nội bộ</span>
                      )}
                    </div>

                    <button
                      onClick={() => openModal(proj)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition"
                    >
                      <Eye size={14} /> Xem chi tiết
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Modal Popup */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto space-y-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold pr-8">{activeProject.title}</h3>
              <p className="text-sm text-slate-400">{activeProject.desc}</p>

              <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
                <img 
                  src={activeProject.gallery[currentImageIdx]} 
                  alt="Gallery Preview" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full flex flex-col items-center justify-center text-slate-500 text-sm gap-2">
                  <span>Chưa có tệp hình ảnh tại:</span>
                  <code className="text-indigo-400 bg-slate-900 px-3 py-1 rounded text-xs">{activeProject.gallery[currentImageIdx]}</code>
                </div>

                {activeProject.gallery.length > 1 && (
                  <>
                    <button 
                      onClick={() => setCurrentImageIdx((prev) => (prev === 0 ? activeProject.gallery.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={() => setCurrentImageIdx((prev) => (prev === activeProject.gallery.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {activeProject.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {activeProject.gallery.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentImageIdx(idx)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 bg-slate-950 transition ${idx === currentImageIdx ? 'border-indigo-500' : 'border-transparent opacity-60'}`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}.
      </footer>
    </div>
  );
}