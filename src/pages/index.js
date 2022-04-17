import * as React from "react";
import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout>
      <section>
        <div>competition logo</div>
        <div>
          <span>profile logo</span>
          <div>select language</div>
        </div>
      </section>
      <section>filter menu</section>
      <section>
        <div>
          <h1>Explore playstation tournaments</h1>
          <span>Showing tournaments in Spain</span>
        </div>

        <div>
          <div>filtro por consola</div>
          <div>filtro por fecha</div>
        </div>

        <div>list of games</div>
        <a>load more</a>

        <div>
          <h1>Explore tournaments by programs</h1>
        </div>

        <div>list of programs</div>
        <a>load more</a>

        <div>no tournaments yet</div>
      </section>

      <footer>
        <ul>
          <li>Terms of service</li>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
          <li>View More</li>
        </ul>
      </footer>
    </Layout>
  );
}

export default IndexPage;
