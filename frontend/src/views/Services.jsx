import { useEffect, useState, useContext } from "react";
import FooterNav from "../components/FooterNav";
import NavBar from "../components/NavBar";
import { BASE_URL } from "../components/App";
import { UserProvider, UserContext } from "../context/UserProvider";
import Schedule from "./Schedule";


export default function Services({ services, loading, setLoading, error, setError }) {
  const user = useContext(UserContext);
  const [servicesState, setServicesState] = useState(
    Array.isArray(services) && services.length ? services : []
  );
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // If parent provided services, use them; otherwise fetch from the API
    if (Array.isArray(services) && services.length) {
      setServicesState(services);
      return;
    }

    let mounted = true;
    const fetchServices = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/services`);
        if (!res.ok) throw new Error(`Failed to load services (${res.status})`);
        const data = await res.json();
        if (!mounted) return;
        setServicesState(Array.isArray(data) ? data : []);
      } catch (err) {
        if (mounted) setError(err.message || "Unable to load services");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchServices();
    return () => {
      mounted = false;
    };
  }, [services]);

  // ensure the rest of the component uses the resolved list
  services = servicesState;
  // expose loading/error for potential UI (the render below can be extended to show them)
  //   const getSevices = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/services`);
  //       const service = await response.json();
  //       setServices(service);
  //       console.log(service);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };
  //   getSevices();
  // }, []);
  function handleClick(e) {
    e.preventDefault()
    console.log("Scheduling...");
    
  }

  return (
    <>
    <UserProvider value={user}>
      {/* <NavBar /> */}
      {user.isLoggedIn ? <Schedule/> : null}
      <main className="services-page min-h-screen" aria-live="polite">
        <header className="services-hero" style={{ padding: "2rem 1rem", textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>Our Services</h1>
          <p style={{ marginTop: "0.5rem", color: "#555", maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}>
            High-quality landscaping solutions — reliable, professional, and tailored to your property.
          </p>
        </header>

        {loading ? (
          <div className="services-loading" role="status" style={{ textAlign: "center", padding: "2rem" }}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 50 50"
              aria-hidden="true"
              style={{ marginBottom: 8 }}
            >
              <circle cx="25" cy="25" r="20" stroke="#2b6cb0" strokeWidth="5" fill="none" strokeDasharray="31.4 31.4">
                <animateTransform attributeName="transform" type="rotate" values="0 25 25;360 25 25" dur="1s" repeatCount="indefinite" />
              </circle>
            </svg>
            Loading services…
          </div>
        ) : error ? (
          <div
            className="services-error"
            role="alert"
            style={{ color: "#842029", background: "#f8d7da", padding: "1rem", borderRadius: 6, margin: "1rem" }}
          >
            Error loading services: {error}
          </div>
        ) : services.length === 0 ? (
          <div className="services-empty" style={{ textAlign: "center", padding: "2rem", color: "#666" }}>
            No services available at the moment.
          </div>
        ) : (
          <section
            className="services-grid"
            aria-label="Available services"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
              padding: "1rem",
              maxWidth: 1100,
              margin: "0 auto",
            }}
          >
            {services.map((service) => {
              const desc = service.discription || service.description || "";
              const short = desc.length > 160 ? desc.slice(0, 160).trim() + "…" : desc;
              const navigateToDetail = () => {
                if (service._id) {
                  window.location.href = `/services/${service._id}`;
                }
              };

              return (
                <article
                  key={service._id}
                  className="service-card"
                  onClick={handleClick}
                  onKeyDown={(e) => { if (e.key === "Enter") navigateToDetail(); }}
                  role="button"
                  tabIndex={0}
                  aria-labelledby={`service-title-${service._id}`}
                  style={{
                    background: "#fff",
                    borderRadius: 8,
                    boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
                    padding: "1rem",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 160,
                    transition: "transform .12s ease, box-shadow .12s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 12px 30px rgba(15,23,42,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 6px 18px rgba(15,23,42,0.06)";
                  }}
                >
                  <div>
                    <h2
                      id={`service-title-${service._id}`}
                      className="service-title"
                      style={{ margin: "0 0 .5rem 0", fontSize: "1.1rem", color: "#0f172a" }}
                    >
                      {service.service}
                    </h2>
                    <p className="service-desc" style={{ margin: 0, color: "#475569", lineHeight: 1.4 }}>
                      {short || "No description provided."}
                    </p>
                  </div>

                  <div style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
                    <button
                      type="button"
                      className="service-cta"
                      onClick={handleClick}
                      style={{
                        background: "linear-gradient(90deg,#2b6cb0,#2c5282)",
                        color: "#fff",
                        border: "none",
                        padding: "0.5rem 0.75rem",
                        borderRadius: 6,
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      Click to Schedule
                    </button>
                  </div>
                </article>
              );
            })}
          </section>
        )}

      </main>
      {/* <FooterNav /> */}
      </UserProvider> 
    </>
  );
}
