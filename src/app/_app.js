import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import '../lib/fontawesome'; // Import the Font Awesome configuration
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
