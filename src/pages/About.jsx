
function About() {
  return  <>
  <h1 className='text-6xl mb-4'>Trouve ton dev</h1>
  <p className='mb-4 text-2xl font-light'>
    Une application React pour rechercher des profils sur Github et voir leurs derniers 
    répertoires.
    {" "}
    <strong>
      <a href='http://louis-webdev-portfolio.netlify.app'>Louis Leca</a>
    </strong>
    .
  </p>
  <p className='text-lg text-gray-400'>
    Version <span className='text-white'>1.0.0</span>
  </p>
</>
}

export default About;
