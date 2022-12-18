import { Link } from "react-router-dom";

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>
                    Welcome to the <span className="nowrap">Task Manager</span>
                </h1>
            </header>
            <main className="public__main">
                <p>Empower your teams with the smartest solutions to achieve goals.</p>
                <address className="public__addr">
                    Vortech Corporation <br />
                    SF 687 <br />
                    Ghaziabad, Uttar Pradesh <br />
                    <a href="tel:+91999973441">(999) 973-4441</a>
                </address>
                <br/>
            </main>
            <footer>
                <Link to='/login'>Employee Login</Link>
            </footer>
        </section>
    );
  return content
}

export default Public