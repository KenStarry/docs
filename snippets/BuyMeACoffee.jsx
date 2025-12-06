const BMAC_SLUG = 'KenStarry';

// This component renders an inline image button that links to your BMAC page.
export const BuyMeACoffee = () => (
    <a
        href={`https://www.buymeacoffee.com/${BMAC_SLUG}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
    >
        <img
            src={`https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&slug=${BMAC_SLUG}&button_colour=5F7FFF&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00`}
            alt="Buy Me A Coffee button"
            style={{
                height: '40px',
                width: 'auto',
                border: 'none',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
        />
    </a>
);

// We export the component as the default export for easy import in MDX
export default BuyMeACoffee;