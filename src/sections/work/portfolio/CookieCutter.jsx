import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

export default function CookieCutter() {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        ← Back to Home
      </Link>

      <h1 className={styles.title}>Cookie Cutter Project</h1>

      <h2><strong>Making Cookie Cutters for a Friend (and Questioning All My Life Choices)</strong></h2>
      <p>
        A good friend of mine told me she was starting her own catering business. So, when her birthday
        rolled around, I thought it would be fun to do something supportive and a little different. I
        offered to 3D print some custom cookie cutters for her.
      </p>

      <img src="https://via.placeholder.com/600x300" alt="Cookie Cutter" />

      <p>It seemed like a simple enough project—until I actually started doing it.</p>

      <h3>Stage One: The Request</h3>
      <p>
        She sent over a few cute line art designs, the kind you'd find on Flaticon—clean and minimal.
        She wanted the cutters to be tiny, perfect for small, elegant cookies. Her guidelines were
        straightforward:
      </p>
      <ul className={styles.customBulletList}>
        <li><strong>Champagne bottle:</strong> 3cm x 1.5cm</li>
        <li><strong>Gift box:</strong> 1.6cm x 1.5cm</li>
        <li><strong>Cake slice:</strong> 1.8cm x 2cm</li>
        <li><strong>Baby bear:</strong> 2.3cm x 1.7cm</li>
        <li><strong>Latte cup:</strong> 2cm x 1.3cm</li>
      </ul>
      <p>
        All were to stay within a 3cm height and 2cm width max—ideal for bite-sized cookies.
      </p>
      <p>
        Before getting into the actual modeling, I asked her how thick the dough would be rolled out.
        She said somewhere between 0.5 and 0.7cm. That helped me figure out how deep the cutters and
        the stamps should be. My printer’s nozzle was already set to 0.4mm, so I figured that was the
        thinnest I could go for the walls. I’m not exactly a CAD wizard, so I imported the SVGs into
        Fusion360, scaled them to size, and gave each one a 0.4mm wall thickness. I added a solid
        backplate to make them more stable.
      </p>

      <h3>Stage Two: The First Failed Attempt</h3>
      <p>
        My first design was a single, solid piece. Cutter and stamp combined. It looked fine in my head
        and when it printed out.
      </p>
      <p>
        When I showed this version to my mate (the birthday girl), she said that if you pressed it into
        dough, getting the cookie out in one piece would be a pain. I tried adding a slight offset
        between the cutter and the stamp (2mm), but it still wasn’t human-friendly. So she suggested a
        two-part solution.
      </p>

      <h3>Stage Three: The Final Design</h3>
      <p><strong>So I Redesigned Everything—This Time in Three Parts</strong></p>
      <p>Each cutter now had:</p>
      <ul className={styles.customBulletList}>
        <li>A <strong>handle</strong></li>
        <li>An <strong>outer cutter</strong> for the shape</li>
        <li>A <strong>design stamp</strong> that pressed the line work into the dough</li>
      </ul>
      <p>
        I made the design stamp 2mm shorter than the cutter to ensure the imprint wouldn’t go all the
        way through the cookie. The handle was printed separately and epoxied on afterward. That let me
        print the stamp without needing tons of supports, saving filament and time.
      </p>
      <p>
        I originally planned to only make five cutters, but somewhere in the process we ended up with
        <em> six </em> versions of a bear because I thought it was cute.
      </p>

      <h3>Stage Four: The Gift Giving</h3>
      <p>
        I wrapped them all up and gave them to her on her birthday. She said she liked them—and I think
        she meant it—but weeks have passed and I haven’t seen a single cookie. Not one Instagram post.
        No subtle flex in her stories.
      </p>
      <p>
        It’s got me wondering:
        <br />
        Did she like them?
        <br />
        Did they work?
        <br />
        Or was this just another one of those “it’s the thought that counts” gifts that ends up in a
        drawer?
      </p>
      <p><em>We’ll never know…</em></p>
    </div>
  );
}
