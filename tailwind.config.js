/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        logo1: '#04df8f',
        logo2: '#a28089',
        dark: '#000000',
        hov: '#026440',
        whiteColor: '#fff',
        gray: '#E5E4E2',
        goldColor: '#e8b923',
        fifty: '#588157',
        lGray: '#D3D3D3',
        card1: '#CFF7DF',
        card2: '#F0C7FF',
        card3: '#F4FFD6',
        card4: '#FFF4E0',
        card5: '#FFE7C7',
        card6: '#F2EBFF',
        card7: '#FFF1EF',
        trueperk: '#FF9300',
        eCard: '#168342',
        hrDashboard: '#9700CC',
        appIntegrate: '#97CC00',
        instantVouch: '#996300',
        gifts: '#4700CC',
        automated: '#CC1A00'
    },
      fontFamily: {
        Nunito: ['Nunito sans', 'sans-serif'],
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "3rem",
        lg: "3rem",
        xl: "3rem",
        '2xl': "6rem"
      }
    },
  },
  plugins: [],
}

