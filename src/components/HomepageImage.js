import profilepic from '../assets/images/kevin-pic.jpeg';

const HomepageImage = () => {
  return (
    <div>
    <img class="aligncenter" src={profilepic} style={{maxWidth: 500}} alt="Profile Picture"/>
    </div>
  );
}

export default HomepageImage;
