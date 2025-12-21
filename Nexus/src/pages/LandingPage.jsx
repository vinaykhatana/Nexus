import PublicNavbar from '../components/public/PublicNavbar';
import HeroSection from '../components/public/HeroSection';
import FeaturesSection from '../components/public/FeaturesSection';
import MarketerHubSection from '../components/public/MarketerHubSection';
import FAQSection from '../components/public/FAQSection';
import Footer from '../components/public/Footer';

const LandingPage = () => {
    return (
        <div id="home" className="min-h-screen bg-white">
            <HeroSection />
            <section id="features">
                <FeaturesSection />
            </section>
            <section id="hub">
                <MarketerHubSection />
            </section>
            <section id="faq">
                <FAQSection />
            </section>
        </div>
    );
};

export default LandingPage;
