import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
}
