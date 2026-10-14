import { useState } from 'react'
import Page from '../components/layout/Page'
import HeroSection from '../components/home/HeroSection'
import CollaborationsSection from '../components/home/CollaborationsSection'
import FindYourPathSection from '../components/home/FindYourPathSection'
import FeaturedProgramsSection from '../components/home/FeaturedProgramsSection'
import CourseFinderWizard from '../components/home/CourseFinderWizard'
import WhyChooseSection from '../components/home/WhyChooseSection'
import MethodologySection from '../components/home/MethodologySection'
import InternshipPortalSection from '../components/home/InternshipPortalSection'
import CorporateCollegeSection from '../components/home/CorporateCollegeSection'
import StudentSuccessSection from '../components/home/StudentSuccessSection'
import KnowledgeFaqSection from '../components/home/KnowledgeFaqSection'
import EnquiryModal from '../components/home/EnquiryModal'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProgram, setSelectedProgram] = useState('')

  const handleOpenEnquiry = (programName = 'General AI Program Enquiry') => {
    setSelectedProgram(programName)
    setIsModalOpen(true)
  }

  const handleCloseEnquiry = () => {
    setIsModalOpen(false)
  }

  return (
    <Page
      title="OIAI - Odisha Institute of Artificial Intelligence | Bhubaneswar AI Training & Career Platform"
      description="Learn Artificial Intelligence, build real projects, and launch your AI career. Premier AI education, live projects, internships, and placement support at DLF Cyber City, Bhubaneswar."
    >
      <div className="bg-[#F7F5EF] text-slate-800 selection:bg-blue-500/20 selection:text-blue-700 min-h-screen">
        
        {/* 1. HERO with Dual Scrolling AI Image Marquees */}
        <HeroSection onEnquire={handleOpenEnquiry} />

        {/* 2. RD Section 9: "Find Your AI Path" Signature Feature */}
        <FindYourPathSection onEnquire={handleOpenEnquiry} />

        {/* 3. RD Section 10: Featured AI Programs */}
        <FeaturedProgramsSection onEnquire={handleOpenEnquiry} />

        {/* 4. RD Section 11: Interactive AI Course Finder */}
        <CourseFinderWizard onEnquire={handleOpenEnquiry} />

        {/* 5. RD Section 12: Why Choose OIAI (6 Core Pillars) */}
        <WhyChooseSection onEnquire={handleOpenEnquiry} />

        {/* 6. RD Section 13: AI Learning Methodology (7-Stage Framework) */}
        <MethodologySection onEnquire={handleOpenEnquiry} />

        {/* 7. RD Section 15: AI Internship Portal */}
        <InternshipPortalSection onEnquire={handleOpenEnquiry} />

        {/* 8. RD Section 16 & 17: Corporate & College Partnerships */}
        <CorporateCollegeSection onEnquire={handleOpenEnquiry} />

        {/* 9. RD Section 21: Student Success Stories & Testimonials */}
        <StudentSuccessSection onEnquire={handleOpenEnquiry} />

        {/* 10. Premier Academic & Global Tech Ecosystem Partners + Frontier AI Models */}
        <CollaborationsSection />

        {/* 11. RD Section 23 & 24: AI Knowledge Hub & AEO / SEO FAQs */}
        <KnowledgeFaqSection onEnquire={handleOpenEnquiry} />

        {/* Global Interactive Enquiry & Brochure Modal */}
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={handleCloseEnquiry}
          defaultProgram={selectedProgram}
        />

      </div>
    </Page>
  )
}
