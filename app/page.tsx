import ReservationCard from "@/components/ReservationCard/ReservationCard";
import "./globals.css";
import AddReservation from "@/components/AddReservation/AddReservation";
import CustomerCard from "@/components/CustomerCard/CustomerCard";

function Home() {
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              <AddReservation />
              <ReservationCard />
            </div>
          </div>
        </div>
        <div className="customer-food-container">
          <CustomerCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
