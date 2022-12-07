import './App.css';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className='contacts'>
      <Contact 
        img="https://theproseandthepassion.files.wordpress.com/2022/01/mrwhiskerson2.jpg" 
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img="https://images.unsplash.com/photo-1503777119540-ce54b422baff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsaWNvJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="https://images.unsplash.com/photo-1610104221138-ad421e40a6c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2luZ2VyJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        name="Felix"
        phone="(212) 555-3456"
        email="thecat@hotmail.com"
      />
      <Contact 
        img="https://www.thesprucepets.com/thmb/xEZZhlOBfQFA2Sg9NbNJdfLAReQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/35616731_1598735883572052_5494475739635908608_n-5b45332ec9e77c0037110989.jpg"
        name="Pumpkin"
        phone="(212) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

export default App;
