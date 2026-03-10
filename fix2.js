const fs = require('fs');
const filePath = 'c:/Users/Admin/Downloads/newpro/service.html';
const html = fs.readFileSync(filePath, 'utf8');

let newHtml = html;

const regexBottomRow = /<div class="bottom-row">[\s\S]*?<\/section>/;

const replacement = `<div class="bottom-row">

        <div class="left-col">
          <!-- 3-D Sticky Graphic -->
          <div class="seo-graphic-wrap">
            <span class="seo-3d" id="stickyText">SEO</span>
            <div class="rocket-img" id="stickyEmoji">🚀</div>
          </div>

          <!-- Card 1 -->
          <div class="service-card" data-text="SEO" data-emoji="🚀">
            <span class="seo-pill">SEO</span>
            <h2 class="card-title-main">Search Engine Optimization</h2>
            <ul class="features">
              <li>
                <svg class="check" viewBox="0 0 24 24" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                On-page and off-page SEO
              </li>
              <li>
                <svg class="check" viewBox="0 0 24 24" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Keyword research and optimization
              </li>
              <li>
                <svg class="check" viewBox="0 0 24 24" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Technical SEO
              </li>
              <li>
                <svg class="check" viewBox="0 0 24 24" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Link building
              </li>
            </ul>
            <a href="#" class="view-btn">
              View Details
              <span class="btn-arrow-circle"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
            </a>
            <div class="card-corner">
              <span class="corner-seo">SEO</span>
              <span class="corner-rocket">🚀</span>
            </div>
          </div>
        </div>

        <!-- Scrollable Cards List -->
        <div class="right-col services-list">

          <!-- Card 2 -->
          <div class="service-card" data-text="EMAIL" data-emoji="📧">
            <span class="seo-pill">Email Campaign</span>
            <h2 class="card-title-main">Email Marketing</h2>
            <ul class="features">
              <li>
                <svg class="check" viewBox="0 0 24 24" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Email campaign design and automation
              </li>
              <li>
                <svg class="check" viewBox="0 0 24 24" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Personalized email sequences
              </li>
              <li>
                <svg class="check" viewBox="0 0 24 24" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Newsletter creation
              </li>
              <li>
                <svg class="check" viewBox="0 0 24 24" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                List segmentation and lead nurturing
              </li>
            </ul>
            <a href="#" class="view-btn">
              View Details
              <span class="btn-arrow-circle"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
            </a>
            <div class="card-corner">
              <span class="corner-seo" style="font-size: 1.8rem;">EMAIL</span>
              <span class="corner-rocket">📧</span>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="service-card" data-text="SOCIAL" data-emoji="🤙">
            <span class="seo-pill">Social media</span>
            <h2 class="card-title-main">Social Media Marketing</h2>
            <ul class="features">
              <li>
                <svg class="check" viewBox="0 0 24 24" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Community engagement
              </li>
              <li>
                <svg class="check" viewBox="0 0 24 24" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Influencer marketing
              </li>
              <li>
                <svg class="check" viewBox="0 0 24 24" fill="none" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                Paid social advertising
              </li>
            </ul>
            <a href="#" class="view-btn">
              View Details
              <span class="btn-arrow-circle"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
            </a>
            <div class="card-corner">
              <span class="corner-seo" style="font-size: 1.6rem;">SOCIAL</span>
              <span class="corner-rocket">🤙</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>`;

newHtml = newHtml.replace(regexBottomRow, replacement);

const cssTarget = `    /* ───────────────────────────────────────
       BOTTOM ROW
    ─────────────────────────────────────── */
    .bottom-row {
      display: flex;
      align-items: flex-start;
      gap: 0;
      margin-top: 40px;
    }

    .services-list {
      flex: 1 1 auto;
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 60px;
    }

    /* LEFT – 3-D SEO */
    .seo-graphic-wrap {
      position: sticky;
      top: 25vh;
      flex: 0 0 auto;
      width: 50%;
      height: 60vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }`;

const cssReplacement = `    /* ───────────────────────────────────────
       BOTTOM ROW
    ─────────────────────────────────────── */
    .bottom-row {
      display: flex;
      align-items: flex-start;
      gap: 30px;
      margin-top: 40px;
    }

    .left-col {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 60px;
    }

    .right-col {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 60px;
    }

    /* LEFT – 3-D SEO */
    .seo-graphic-wrap {
      position: sticky;
      top: 15vh;
      width: 100%;
      height: 40vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }`;

newHtml = newHtml.replace(cssTarget, cssReplacement);

fs.writeFileSync(filePath, newHtml);
console.log("Updated HTML successfully.");
