export function BrandLogos() {
  const brands = [
    { name: "Coinbase", logo: "https://th.bing.com/th/id/OIP.KU14AyCQlfNaErf6EIMOuwHaE7?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: "Spotify", logo: "https://th.bing.com/th/id/OIP.PnjhrRdEHajY9vO3yp-j6gHaHk?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: "Slack", logo: "https://th.bing.com/th/id/OIP.1DYDPCASfP09qVmSsMRDiQHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: "Dropbox", logo: "https://th.bing.com/th/id/OIP.ypXxAFVnqsT6O1RjSPX4ZAHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: "Webflow", logo: "https://th.bing.com/th?q=Web+Flow+Icon.png&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
    { name: "Zoom", logo: "https://th.bing.com/th?q=Web+Flow+Icon.png&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" },
  ]

  return (
    <div className="py-12 bg-white">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <img
              key={brand.name}
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-6 md:h-8 w-auto opacity-50 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

