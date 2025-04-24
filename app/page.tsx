import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import Benefits from './components/Benefits';
import RegisterForm from './components/RegisterForm';
import SocialProof from './components/SocialProof';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CountdownTimer />
      <Benefits />
      <RegisterForm />
      <SocialProof />
    </main>
  );
} 