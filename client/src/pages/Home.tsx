import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import ToDo from '../components/layout/ToDo'

export interface IAppProps {
}

export default function Home(props: IAppProps) {
  return (
    <div>
      <Navbar />
      <ToDo />
      <Footer />
    </div>
  );
}
