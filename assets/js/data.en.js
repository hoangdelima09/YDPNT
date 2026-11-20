/* English translations of the content in data.js, keyed by id.
   Keep the structure in sync with data.js: when an article/news item/topic is added there, add its translation here. */

window.SITE_EN = {};

SITE_EN.sources = {
  "#/cuoc-thi": "MAI – 200-question hepatitis B health-education question bank (based on Decisions 1740/QD-BYT (2026) and 678/QD-BYT (2025))",
  "https://www.who.int/news-room/fact-sheets/detail/hepatitis-b": "WHO – Hepatitis B (fact sheet)",
  "https://kcb.vn/upload/2005611/20260617/BYT__QD_ban_hanh_HDCDT_viem_gan_vi_rut_B_-_final_2_signed_8c1b5.pdf": "Ministry of Health (Vietnam) – Decision 1740/QD-BYT (16 Jun 2026): Guidelines for the diagnosis and treatment of hepatitis B (in Vietnamese)",
  "https://thuvienphapluat.vn/van-ban/The-thao-Y-te/Quyet-dinh-678-QD-BYT-2025-huong-dan-ky-thuat-can-thiep-du-phong-lay-truyen-HIV-tu-me-sang-con-694318.aspx": "Ministry of Health (Vietnam) – Decision 678/QD-BYT (26 Feb 2025): Technical guidelines on interventions to prevent mother-to-child transmission of HIV, hepatitis B and syphilis (in Vietnamese)",
  "https://www.globalhep.org/sites/default/files/content/national_profiles/files/2025-06/2025-05-Vietnam_National%20Hepatitis%20Elimination%20Profile.pdf": "Coalition for Global Hepatitis Elimination – Vietnam National Hepatitis Elimination Profile (updated 3 Jun 2025)"
};

SITE_EN.groups = {
  btn:  { code: "Communicable diseases", name: "Communicable diseases", desc: "Diseases that spread from person to person through viruses or bacteria, such as hepatitis B and HIV, with their diagnosis, treatment, prevention, mother-to-child transmission and safe living together." },
  bkln: { code: "Non-communicable diseases", name: "Non-communicable diseases", desc: "Chronic, non-infectious diseases and complications such as cirrhosis and liver cancer, plus nutrition, lifestyle and liver protection, monitoring and early detection." }
};

SITE_EN.news = {
  n1: { title: "Ministry of Health issues new guidelines for diagnosing and treating hepatitis B",
        summary: "Decision 1740/QD-BYT of 16 Jun 2026 replaces Decision 3310/QD-BYT of 2019 and applies to health facilities nationwide." },
  n2: { title: "WHO updates its hepatitis B fact sheet: 1.1 million deaths in 2024",
        summary: "Only about 10 million people receive antiviral treatment, equal to 4.3% of those living with chronic infection." },
  n3: { title: "Vietnam's National Hepatitis Elimination Profile (updated Jun 2025)",
        summary: "HBsAg prevalence in adults is 9.4%; 41.67% of people living with HBV are diagnosed; the elimination goal is 2030." },
  n4: { title: "Decision 678/QD-BYT: preventing mother-to-child transmission of HIV, hepatitis B and syphilis",
        summary: "One unified technical guideline for three infections passed from mother to child, issued on 26 Feb 2025." }
};

SITE_EN.chatTopics = {
  vgb:   { name: "Hepatitis B", welcome: "Hello! I'm MAI 🌿. I can help you find reliable, easy-to-understand health information about hepatitis B. What would you like to know today?",
           suggestions: ["Causes and transmission of hepatitis B?", "Which symptoms need a doctor?", "Who should be tested for HBsAg?", "How to prevent hepatitis B?"] },
  mecon: { name: "Mother and child", welcome: "Hi! I can answer questions about preventing mother-to-child transmission of hepatitis B (and HIV, syphilis) during pregnancy and after birth.",
           suggestions: ["What should a pregnant woman with hepatitis B do?", "What does a newborn need after birth?", "Can a mother with HBV breastfeed?"] },
  pb:    { name: "Prevention and vaccines", welcome: "Hi! Ask me about vaccination schedules, what to do after a needlestick or blood exposure, and other preventive measures.",
           suggestions: ["What is the hepatitis B vaccine schedule?", "What to do after a needlestick injury?", "What should family members do if someone is infected?"] },
  dt:    { name: "Treatment and follow-up", welcome: "Hello! I can explain information about treatment, check-ups and monitoring of hepatitis B (for reference only – not a substitute for a doctor).",
           suggestions: ["When is antiviral treatment needed?", "Can I stop the medicine when I feel well?", "How often should I have check-ups?"] },
  hl:    { name: "Common myths", welcome: "Hi! Heard something about hepatitis B you're not sure is true? I'll help check it against authoritative sources.",
           suggestions: ["Does sharing a meal spread hepatitis B?", "Can herbal tea replace antiviral medicine?", "Can people with HBV work or marry?"] }
};

SITE_EN.articles = {

/* 1 */
"viem-gan-b-tong-quan": {
  title: "Hepatitis B: an overview",
  summary: "A liver disease caused by the HBV virus: how it spreads, how it progresses, and its burden worldwide and in Vietnam.",
  body: `
<div class="callout"><p><strong>Quick recap:</strong> hepatitis B is a viral disease spread through blood, unprotected sex and from mother to child. Most people with chronic infection have <strong>no symptoms</strong>, so everyone should be tested for HBsAg at least once. It <strong>cannot yet be completely cured</strong> but is well controlled with antiviral medicine and regular check-ups; <strong>vaccination</strong> is the most effective prevention.</p></div>
<div class="stats">
  <div><b>254 million</b><span>people living with chronic HBV infection worldwide (2022 estimate)</span></div>
  <div><b>1.1 million</b><span>deaths from hepatitis B each year, mostly from cirrhosis and liver cancer</span></div>
  <div><b>9.4%</b><span>of adults aged 18+ in Vietnam are HBsAg-positive (2018–2019 survey)</span></div>
  <div><b>4.3%</b><span>of people living with chronic hepatitis B receive antiviral treatment (2024)</span></div>
</div>

<h2>What is hepatitis B?</h2>
<p>Hepatitis B is a common infectious disease caused by the <strong>hepatitis B virus (HBV)</strong>. The virus belongs to the family <em>Hepadnaviridae</em>, has a DNA genome and is divided into 10 genotypes, A to J.</p>
<p>HBV has three main antigens – <strong>HBsAg</strong> (surface), <strong>HBeAg</strong> and <strong>HBcAg</strong> (core) – matched by three antibodies: anti-HBs, anti-HBe and anti-HBc. Testing for these antigens and antibodies helps identify the disease, its form and its course.</p>

<h2>Acute versus chronic hepatitis B</h2>
<p><strong>Acute hepatitis B</strong> is the first roughly 6 months after infection; most adults with normal immunity clear the virus and recover. If HBsAg is still positive after 6 months, it is <strong>chronic HBV infection</strong>. See <a href="#/bai/viem-gan-b-cap">Acute hepatitis B</a> and <a href="#/bai/giai-doan-nhiem-hbv-man">Phases of chronic HBV infection</a>.</p>

<h2>How does the disease progress?</h2>
<p>HBV can cause <strong>acute hepatitis</strong> and, more rarely, fulminant hepatitis, but it mainly causes <strong>chronic hepatitis</strong>. Chronic hepatitis can progress to <strong>cirrhosis</strong> and <strong>hepatocellular carcinoma (liver cancer)</strong>. Most people with chronic infection have no symptoms until liver disease is advanced, which is why early testing matters.</p>

<h2>How it spreads</h2>
<ul>
  <li><strong>Blood</strong> (transfusion, shared needles, tattoo tools, or medical procedures with poorly sterilised instruments).</li>
  <li><strong>Sexual contact</strong> without protection.</li>
  <li><strong>From mother to child</strong> – the main route in Vietnam.</li>
</ul>

<h2>Burden of disease</h2>
<p>According to WHO estimates cited by Vietnam's Ministry of Health, in 2022 about 254 million people worldwide lived with chronic HBV, with 1.2 million new infections a year and 1.1 million deaths. WHO's updated fact sheet (June 2026) reports 1.1 million deaths in 2024, while only about 10 million people were taking antiviral medicines.</p>
<p>In Vietnam, hepatitis B is the <strong>leading cause of cirrhosis and liver cancer</strong>. The share of infected people who are detected and treated remains low, and deaths related to the disease remain high.</p>

<h2>The most effective prevention</h2>
<p>Hepatitis B vaccination and preventing mother-to-child transmission are the two main, effective preventive measures. See also <a href="#/bai/phong-benh-viem-gan-b">Hepatitis B prevention</a> and <a href="#/bai/me-con-viem-gan-b">Preventing mother-to-child transmission of hepatitis B</a>.</p>`
},

/* 2 */
"xet-nghiem-viem-gan-b": {
  title: "Hepatitis B testing and how to read the results",
  summary: "Who should be tested, which tests are needed, and what HBsAg, anti-HBc and anti-HBs results mean.",
  body: `
<p>The Ministry of Health recommends that <strong>everyone living in Vietnam</strong> be tested for HBV early, especially the groups below.</p>

<h2>Who should be tested</h2>
<ul>
  <li>People born before 2003 – the year hepatitis B vaccination for infants under one year was rolled out nationwide.</li>
  <li>Pregnant women.</li>
  <li>People attending HIV or tuberculosis counselling and testing services.</li>
  <li>People with risk behaviours: people living with HIV, people who inject drugs, men who have sex with men, sex workers, prisoners, and people who have unprotected sex.</li>
  <li>People with symptoms of hepatitis or raised liver enzymes, and people with liver fibrosis or cirrhosis.</li>
  <li>People on regular dialysis or receiving blood transfusions and blood products.</li>
  <li>People about to start immunosuppressive therapy or chemotherapy, and people with tumours or cancer.</li>
  <li>Health workers who have not been vaccinated against hepatitis B.</li>
  <li>Blood, organ, egg and sperm donors.</li>
  <li>Sexual partners and family members of people with HBV.</li>
  <li>People with a history of unsafe injections or procedures, and people who need post-exposure prophylaxis.</li>
</ul>

<h2>Tests to order</h2>
<p><strong>HBsAg, anti-HBs and anti-HBc</strong> (where available). At minimum, <strong>HBsAg</strong> must be done.</p>

<h2>Interpreting the results</h2>
<div class="table-wrap"><table>
  <thead><tr><th>HBsAg</th><th>Anti-HBc</th><th>Anti-HBs</th><th>Interpretation</th><th>Management</th></tr></thead>
  <tbody>
    <tr><td>Positive</td><td>Positive</td><td>Any</td><td>Chronic hepatitis B</td><td>Link to a treatment facility for management per the guidelines. No vaccination needed.</td></tr>
    <tr><td>Negative</td><td>Positive</td><td>≥ 10 IU/L</td><td>Recovered from past HBV infection</td><td>No management needed unless immunosuppressed or receiving chemotherapy/immunosuppressive therapy. No vaccination needed.</td></tr>
    <tr><td>Negative</td><td>Positive</td><td>&lt; 10 IU/L</td><td>Recovered from past HBV infection, or occult hepatitis B, or false positive</td><td>Test HBV DNA if immunosuppressed or occult hepatitis B is suspected. No vaccination needed.</td></tr>
    <tr><td>Negative</td><td>Negative</td><td>≥ 10 IU/L</td><td>Not infected; protected by vaccination</td><td>No further testing. Continue remaining doses if the schedule is incomplete.</td></tr>
    <tr><td>Negative</td><td>Negative</td><td>&lt; 10 IU/L</td><td>Not infected; not protected</td><td><strong>Vaccinate</strong> with the full course; retest anti-HBs 1–2 months after completing it.</td></tr>
  </tbody>
</table></div>
<div class="callout">
  <p><strong>Note:</strong> people who are HBsAg-positive should be counselled and linked to a facility for management and treatment. People who are HBsAg-negative should also have anti-HBc and anti-HBs tested (if not done before) to guide preventive advice.</p>
</div>

<h2>What the common markers mean</h2>
<ul>
  <li><strong>HBsAg</strong> (surface antigen): positive = carrying HBV; negative = not currently infected. Positive for more than 6 months means chronic HBV infection.</li>
  <li><strong>Anti-HBs</strong> (surface antibody): <strong>10 IU/L or more</strong> means protective antibodies (from vaccination or recovery); below 10 IU/L means none or not enough – vaccinate if uninfected.</li>
  <li><strong>Anti-HBc</strong>: positive shows past exposure to HBV; anti-HBc IgM positive suggests acute hepatitis B.</li>
  <li><strong>HBeAg</strong> positive: usually suggests active viral replication and higher infectiousness.</li>
  <li><strong>HBV DNA</strong> (viral load): the amount of virus in the blood; doctors use it to decide treatment and monitor response.</li>
  <li><strong>ALT/AST</strong> (liver enzymes): rise when liver cells are damaged. <strong>Normal liver enzymes do not rule out HBV infection</strong>, because many people with chronic infection have normal enzymes.</li>
  <li><strong>Abdominal ultrasound, AFP (± AFP-L3, PIVKA II):</strong> used for early detection of liver cancer; <strong>FibroScan/APRI/FIB-4:</strong> assess liver fibrosis.</li>
</ul>
<p>HBsAg and anti-HBs tests <strong>do not require fasting</strong>. If your report shows many abnormal values, take it to a doctor for explanation – do not guess the diagnosis or buy medicine yourself.</p>`
},

/* 3 */
"viem-gan-b-cap": {
  title: "Acute hepatitis B: signs, treatment and follow-up",
  summary: "Incubation period, clinical stages, when antivirals are needed, and how to tell recovery from progression to chronic infection.",
  body: `
<h2>Diagnosis</h2>
<p><strong>History:</strong> the patient was exposed to HBV (transfusion, injecting drug use, unprotected sex, tattooing, medical procedures with poorly sterilised instruments) about <strong>4–24 weeks</strong> (the incubation period) before symptoms began.</p>
<h3>Typical form – 3 stages</h3>
<ol>
  <li><strong>Pre-icteric:</strong> fatigue, loss of appetite, nausea, vomiting, mild fever and mild discomfort in the right upper abdomen.</li>
  <li><strong>Icteric:</strong> after the fever settles there may be itching, yellow skin and eyes, dark urine (like strong tea) and sometimes pale stools.</li>
  <li><strong>Recovery:</strong> symptoms improve and fade gradually.</li>
</ol>
<h3>Other forms</h3>
<ul>
  <li><strong>Asymptomatic:</strong> in most patients, especially adults.</li>
  <li><strong>Fulminant</strong> (under 1% of adults): acute liver failure, hepatic encephalopathy and severe coagulation disorders; mortality is usually above 70% without timely treatment.</li>
</ul>
<h3>Laboratory findings</h3>
<ul>
  <li>AST and ALT raised, usually more than 5 times the upper limit of normal (ULN for ALT: 30 U/L in men, 19 U/L in women).</li>
  <li>Anti-HBc IgM positive; HBsAg positive (or negative during the "window period").</li>
</ul>
<p><strong>Differential diagnosis:</strong> acute hepatitis from other viruses (HAV, HCV, HDV, HEV…), a flare of chronic hepatitis B, and liver injury from other causes.</p>

<h2>Treatment</h2>
<p>Treatment of acute hepatitis B is mainly <strong>symptomatic</strong>:</p>
<ul>
  <li>Rest; avoid heavy work or strain while symptomatic.</li>
  <li>Reduce fat intake and avoid alcohol; use temporary intravenous feeding only for heavy vomiting or inability to eat.</li>
  <li>Avoid medicines metabolised by the liver.</li>
  <li>Intensive medical resuscitation for severe cases.</li>
</ul>
<h3>When are antivirals used?</h3>
<p>Tenofovir disoproxil fumarate (TDF), entecavir (ETV) or tenofovir alafenamide (TAF) are given until HBsAg is lost for 3 months in these cases:</p>
<ul>
  <li>Severe acute hepatitis B – at least 2 of: hepatic encephalopathy; total bilirubin &gt; 3 mg/dL (51 µmol/L); INR &gt; 1.5.</li>
  <li>Illness lasting more than 4 weeks with rising bilirubin.</li>
  <li>Immunocompromised patients or those with serious comorbidities.</li>
</ul>
<p>For fulminant hepatitis, specialist consultation is needed to consider liver transplantation.</p>

<h2>Follow-up</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Test</th><th>Frequency</th><th>Purpose</th></tr></thead>
  <tbody>
    <tr><td>AST/ALT</td><td>Every 1–2 weeks until ALT is normal; then every 4–12 weeks for at least 6 months (or until HBsAg is negative)</td><td>Assess liver cell damage and recovery</td></tr>
    <tr><td>INR (or PT), bilirubin</td><td>Every 1–2 weeks until normal</td><td>Assess clotting and bilirubin clearance; rule out acute liver failure</td></tr>
    <tr><td>HBsAg, anti-HBs</td><td>Week 12 and week 24 (3 and 6 months after onset)</td><td>Determine viral clearance and immune response</td></tr>
    <tr><td>HBV DNA viral load</td><td>May be done every 24 weeks if progression to chronic infection is suspected</td><td>Assess viral replication</td></tr>
  </tbody>
</table></div>

<h2>Recovery or chronic infection?</h2>
<ul>
  <li><strong>Recovery:</strong> loss of HBsAg (with or without anti-HBs) 6 months after onset. Liver biochemistry should then be checked yearly; people who are immunosuppressed or on chemotherapy or immunosuppressants need monitoring for reactivation.</li>
  <li><strong>Chronic infection:</strong> HBsAg is still positive after 6 months. The patient is monitored and managed as having chronic hepatitis B.</li>
</ul>`
},

/* 4 */
"viem-gan-b-man": {
  title: "Chronic hepatitis B: diagnosis, treatment and monitoring",
  summary: "Treatment criteria, antiviral drugs, when treatment can be stopped, and the follow-up schedule under the Ministry of Health's new guidelines.",
  body: `
<div class="callout warn"><p>The content below summarises professional guidelines for learners' reference. Prescribing and using medicines must be decided by a doctor – never start or stop treatment on your own.</p></div>

<h2>Diagnosing chronic HBV infection</h2>
<p>Chronic HBV infection is defined by a <strong>positive HBsAg</strong> in adults, or HBsAg persisting for 6 months or longer in adolescents and children. Everyone with chronic infection should be linked to a treatment facility for long-term management.</p>
<p>Most people have no symptoms until advanced liver disease develops. Then there may be an enlarged liver or spleen, itching, fatigue, joint pain, palmar erythema, spider naevi and oedema; decompensated cirrhosis brings ascites, bleeding from ruptured oesophageal varices, hepatic encephalopathy and jaundice. Some people have extrahepatic manifestations such as glomerulonephritis, polyarthritis or vasculitis.</p>

<h2>Assessing disease stage</h2>
<ul>
  <li><strong>Liver function:</strong> blood count (platelets), PT/INR, ALT, AST, bilirubin, albumin.</li>
  <li><strong>Viral status:</strong> HBV DNA viral load, HBeAg/anti-HBe; where available, qHBsAg and HBcrAg.</li>
  <li><strong>Liver fibrosis:</strong> APRI, FIB-4, M2BPGi, FibroTest or liver stiffness measurement (FibroScan etc.).
    <ul>
      <li>Significant fibrosis (≥ F2): APRI &gt; 0.5 or FibroScan &gt; 7 kPa.</li>
      <li>Cirrhosis (F4): APRI &gt; 1 or FibroScan &gt; 12.5 kPa.</li>
    </ul>
  </li>
  <li><strong>Early detection of complications:</strong> ultrasound, AFP, PIVKA II, AFP-L3, CT/MRI; upper endoscopy if cirrhosis is present.</li>
  <li><strong>Coinfections and comorbidities:</strong> HIV, HCV, HDV, HEV, kidney disease, diabetes, metabolic dysfunction-associated fatty liver disease.</li>
</ul>

<h2>Goals and principles of treatment</h2>
<ul>
  <li>Long-term suppression of HBV replication; better quality of life and prevention of cirrhosis and liver cancer.</li>
  <li>Preventing transmission (including mother-to-child) and preventing flares and reactivation.</li>
  <li>First-line treatment is oral <strong>nucleos(t)ide analogues (NAs)</strong> as monotherapy; peg-interferon is used only in certain special cases.</li>
  <li>Treatment with NAs is <strong>long-term and may be lifelong</strong>; adherence and regular follow-up are essential.</li>
</ul>

<h2>When is treatment needed?</h2>
<p>Treatment is recommended for adults and adolescents (≥ 12 years) with chronic HBV infection who meet <strong>any one</strong> of the following:</p>
<ol>
  <li>Significant fibrosis (≥ F2) or cirrhosis – <em>regardless of</em> HBV DNA or ALT.</li>
  <li>HBV DNA &gt; 2,000 IU/mL <strong>and</strong> ALT above the upper limit of normal (adolescents: ALT raised at least twice within 6–12 months).</li>
  <li>HBV DNA above the detection limit plus one of: coinfection (HIV, HDV, HCV); comorbidity (diabetes, fatty liver disease…); immunosuppression; extrahepatic manifestations; family history of liver cancer or cirrhosis; relapse after stopping antiviral therapy.</li>
  <li>If HBV DNA cannot be measured: ALT above the upper limit of normal for 6–12 months.</li>
</ol>

<h2>Preparing for treatment and counselling</h2>
<ul>
  <li>Ask about: when HBV was found, any previous antiviral treatment, family history of cirrhosis or liver cancer; look for extrahepatic signs (vasculitis, arthritis, glomerulonephritis, thyroiditis).</li>
  <li>Assess <strong>kidney function</strong> (creatinine, eGFR) and risk factors for kidney impairment (hypertension, diabetes, nephrotoxic drugs, older age, weight &lt; 50 kg); assess comorbidities (HCV, HIV, HDV, diabetes, fatty liver) and current medicines.</li>
  <li>Counsel from diagnosis and throughout treatment: understanding the disease and prognosis, aims and length of treatment, side effects, <strong>the importance of adherence</strong>, follow-up schedule; healthy living (nutrition, avoiding alcohol, caution with liver-toxic drugs); preventing spread to relatives (testing, vaccination, condoms, not sharing razors/toothbrushes).</li>
</ul>

<h2>Antiviral drugs (people aged ≥ 12)</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Drug</th><th>Adult dose and notes</th><th>Side effects</th></tr></thead>
  <tbody>
    <tr><td><strong>Tenofovir disoproxil fumarate (TDF)</strong> 300 mg</td><td>300 mg/day; adjust the dose to kidney function. Avoid if eGFR &lt; 50 mL/min, osteoporosis, or several risk factors for kidney dysfunction (hypertension, diabetes, older age, weight &lt; 50 kg…).</td><td>Kidney disease, Fanconi syndrome, osteoporosis, lactic acidosis</td></tr>
    <tr><td><strong>Entecavir (ETV)</strong> 0.5 mg; 1 mg</td><td>0.5 mg/day (1 mg/day if previously on lamivudine or decompensated cirrhosis). Adjust to kidney function. <strong>Not for pregnant women.</strong></td><td>Lactic acidosis</td></tr>
    <tr><td><strong>Tenofovir alafenamide (TAF)</strong> 25 mg</td><td>25 mg/day. Can be used in decompensated cirrhosis; no dose reduction in mild, moderate or severe kidney impairment or on haemodialysis.</td><td>Weight gain, raised cholesterol, lactic acidosis</td></tr>
    <tr><td><strong>Peg-IFN-α-2a</strong></td><td>180 µg/week for 48 weeks. May be considered for people who want short-term treatment, HDV coinfection, or low viral load with high ALT. Needs careful counselling on benefits and side effects.</td><td>Flu-like symptoms, fatigue, psychiatric effects, low white cell count, thyroid dysfunction, anorexia, weight loss</td></tr>
  </tbody>
</table></div>

<p>Alternative regimens when <strong>single-agent TDF is unavailable</strong>: TDF/lamivudine (TDF/3TC) or TDF/emtricitabine (TDF/FTC), one tablet daily. Entecavir or TAF are preferred for people with kidney disease or osteoporosis, children (ETV from age 2) and adolescents (TAF from age 12).</p>

<h2>Duration of treatment and stopping</h2>
<ul>
  <li><strong>Cirrhosis, liver cancer:</strong> lifelong NA therapy.</li>
  <li><strong>No cirrhosis:</strong> long-term treatment; stopping is considered only if criteria are met and long-term post-treatment monitoring is possible.</li>
  <li>Examples of stopping criteria: HBeAg-positive – may stop after 12 more months of treatment following HBeAg seroconversion; HBeAg-negative – HBV DNA below the detection limit for at least 3–4 years and low quantitative HBsAg (&lt; 100 IU/mL); or loss of HBsAg on two occasions 6 months apart. Where HBcrAg can be measured, stopping may be considered when HBcrAg is &lt; 2 logU/mL and HBV DNA is undetectable. General conditions: no advanced fibrosis (F3) or cirrhosis (F4) and the ability to be monitored long term after stopping.</li>
  <li>Stopping is not recommended in immunosuppressed people because of the high risk of reactivation.</li>
  <li>After stopping: monthly checks for the first 6 months, then every 12 weeks for 1–2 years with ALT and HBV DNA. Reactivation is HBV DNA ≥ 2,000 IU/mL; retreat when it exceeds 10,000 IU/mL.</li>
</ul>

<h2>Monitoring during treatment</h2>
<ul>
  <li><strong>Visits:</strong> every 12 weeks for higher-risk patients (cirrhosis, first year of treatment, poor adherence); every 12–24 weeks for stable patients (treated &gt; 1 year, no cirrhosis, good adherence, HBV DNA below the detection limit).</li>
  <li>Assess adherence at every visit.</li>
  <li>ALT/AST and blood count: every 12–24 weeks. HBV DNA: weeks 12, 24 and 48, then every 24–48 weeks.</li>
  <li>Liver fibrosis (APRI, FIB-4, FibroScan): every 24–48 weeks.</li>
  <li>Early liver cancer detection: ultrasound every 12–24 weeks; markers AFP, AFP-L3, PIVKA II every 24 weeks.</li>
  <li>Kidney function (creatinine, urinalysis): in the first month, then every 24–48 weeks.</li>
</ul>

<h2>When treatment fails</h2>
<p>Adherence must be re-assessed before concluding that treatment has failed. <strong>Primary failure:</strong> HBV DNA falls by less than 1 log10 IU/mL after 3 months. <strong>Secondary failure:</strong> HBV DNA rises by more than 1 log10 IU/mL above the lowest level reached. Change medicines only after strengthening adherence support; prefer switching to TDF, TAF or ETV without cross-resistance to the previous drug.</p>`
},

/* 5 */
"viem-gan-b-dac-biet": {
  title: "Hepatitis B in special populations",
  summary: "HCV, HIV and HDV coinfection; people on immunosuppressants or chemotherapy; liver cancer; and flares of chronic hepatitis B.",
  body: `
<h2>HBV/HCV coinfection</h2>
<p>Test everyone with HBV for anti-HCV; if positive, follow with HCV RNA or HCV core antigen to diagnose hepatitis C. People coinfected with HBV/HCV need NA treatment for hepatitis B <em>regardless of</em> HBV DNA, ALT and fibrosis stage. People who are HBsAg-negative and anti-HBs-negative but anti-HBc-positive have a very low risk of reactivation on DAA therapy: no prophylaxis is needed, but ALT/AST should be checked every 4–8 weeks during DAA treatment and for 12 weeks afterwards.</p>

<h2>HBV/HIV coinfection</h2>
<p>Antiretroviral therapy (ART) should include <strong>TDF or TAF</strong>, and TDF/TAF should be continued if the regimen must be changed because of resistance. If TDF is contraindicated (kidney impairment, osteoporosis), replace it with TAF or use ETV to treat hepatitis B.</p>

<h2>HBV/HDV coinfection</h2>
<p>Test everyone who is HBsAg-positive for total anti-HDV (where available); if positive, test HDV RNA. Hepatitis D with high HDV RNA and raised ALT: peg-IFN-α 180 µg/week for 48 weeks (or a licensed alternative). Hepatitis B is still treated with antivirals regardless of HBV DNA, ALT or fibrosis stage.</p>

<h2>People on immunosuppressants, chemotherapy, or having organ transplants</h2>
<p>See the three risk levels in <a href="#/bai/du-phong-tai-hoat-hbv">Preventing hepatitis B reactivation</a>.</p>
<ul>
  <li>HBsAg, anti-HBc and HBV DNA must be tested before starting.</li>
  <li>Prophylaxis with TDF, TAF or ETV should start early – 2 weeks before or at the latest together with the immunosuppressant or chemotherapy – and continue for 6–12 months (depending on the case) after stopping them.</li>
</ul>

<h2>Hepatocellular carcinoma</h2>
<p>Long-term treatment with ETV, TDF or TAF immediately before, during and after liver cancer treatment.</p>

<h2>Flares of chronic hepatitis B</h2>
<ul>
  <li>Diagnosed when ALT suddenly rises to more than 3 times baseline or more than 5 times the upper limit of normal, not caused by alcohol, drugs, etc., in an HBsAg-positive person. HBV DNA may not rise and can even fall.</li>
  <li>Presentation ranges from no symptoms to a picture resembling acute hepatitis. Flares often occur with immunosuppressants or chemotherapy, after stopping anti-HBV drugs, or with other conditions that injure the liver.</li>
  <li>Antiviral treatment should start at once to avoid decompensated liver disease and death; discuss liver transplantation if indicated.</li>
</ul>`
},

/* 6 */
"phong-benh-viem-gan-b": {
  title: "Hepatitis B prevention: vaccination and post-exposure care",
  summary: "The WHO vaccination schedule, steps to take within 24 hours of exposure, and non-specific preventive measures.",
  body: `
<h2>Hepatitis B vaccine</h2>
<p>The hepatitis B vaccine is the main form of active prevention. According to WHO, it is usually given soon after birth, with boosters a few weeks later, and gives almost 100% protection.</p>
<div class="stats">
  <div><b>≤ 24 hours</b><span>give the birth dose as soon as possible after delivery</span></div>
  <div><b>2–3 doses</b><span>follow, at least 4 weeks apart (WHO)</span></div>
  <div><b>≈ 100%</b><span>protection when the course is complete</span></div>
</div>
<ul>
  <li>In Vietnam, hepatitis B vaccination for infants under one year began in 1997 and expanded nationwide in 2002; people born before 2003 are therefore advised to be screened.</li>
  <li>Schedule used in Vietnam to prevent mother-to-child transmission: a birth dose within 24 hours, then 3 doses at 2, 3 and 4 months of age.</li>
  <li>Adults without immunity (anti-HBs &lt; 10 IU/L) should complete the full course and have anti-HBs rechecked 1–2 months later.</li>
</ul>

<h2>Vaccine quick questions</h2>
<ul>
  <li><strong>Is the vaccine safe?</strong> Very safe – a recombinant vaccine rigorously tested worldwide; it does not affect fertility. Common reactions are a mild fever and mild soreness at the injection site, resolving in 1–2 days; take a child to a doctor if fever exceeds 39 °C or the child is lethargic.</li>
  <li><strong>Adult schedule when not immune:</strong> a 3-dose course (usually 0–1–6 months). After completing it, test anti-HBs 1–2 months later to confirm ≥ 10 IU/L.</li>
  <li><strong>Late or missed dose:</strong> give the missing dose as soon as possible; there is no need to restart.</li>
  <li><strong>People with high anti-HBs</strong> (e.g. &gt; 100 IU/L) do not need an immediate booster.</li>
  <li><strong>Should infected people (HBsAg-positive) be vaccinated?</strong> No – the vaccine does not treat disease; they need assessment and treatment as indicated.</li>
  <li><strong>Immunocompromised people and those on regular dialysis</strong> may need a different schedule or dose as directed by their doctor.</li>
  <li><strong>Women planning pregnancy</strong> should check immunity and be vaccinated before conceiving if they have no antibodies.</li>
  <li><strong>Children:</strong> vaccinated free under the Expanded Programme on Immunisation: birth dose within 24 hours, then 5-in-1 (or 6-in-1) vaccine at 2, 3 and 4 months.</li>
  <li><strong>Hepatitis B vaccine does not protect against hepatitis A or C</strong> – each has its own vaccine/preventive measures.</li>
</ul>

<h2>Post-exposure prophylaxis for HBV</h2>
<p>This must be done <strong>immediately, within 24 hours</strong> of exposure:</p>
<ol>
  <li><strong>Wash</strong> the wound or contact site under running water with soap; for the eye's mucous membrane, rinse with 0.9% NaCl.</li>
  <li><strong>Test</strong> the exposed person for HBsAg, anti-HBs and anti-HBc.</li>
  <li><strong>Prophylaxis</strong> if the exposed person is HBsAg-negative, anti-HBs &lt; 10 IU/mL and anti-HBc-negative (no intervention is needed in other cases):
    <ul>
      <li>Hepatitis B immune globulin (HBIG) 0.06 mL/kg by intramuscular injection;</li>
      <li>A full 3-dose hepatitis B vaccine course;</li>
      <li>Retest HBsAg and anti-HBs 1–2 months after the last dose.</li>
    </ul>
  </li>
</ol>

<h2>Non-specific prevention</h2>
<ul>
  <li>Ensure the safety of blood transfusion and blood products; screen every blood unit for hepatitis B.</li>
  <li>Do not share needles or skin-piercing instruments; do not share razors or toothbrushes.</li>
  <li>Practise safe sex.</li>
  <li>Avoid direct contact with the blood and body fluids of people with HBV.</li>
  <li>Health facilities should apply standard precautions.</li>
</ul>

<h2>Where are the gaps?</h2>
<p>Worldwide, WHO reports that only about 45% of newborns received the vaccine within 24 hours of birth (2022). In Vietnam, birth-dose and 3-dose infant coverage are reported as high but vary by year and data source; adult vaccination is currently paid for out of pocket.</p>`
},

/* 7 */

/* 8 */
"viem-gan-b-tre-em": {
  title: "Hepatitis B in children",
  summary: "When children aged 2–11 need treatment, the drugs and weight-based doses, and why children under 2 are not treated.",
  body: `
<p>There is not yet enough evidence to apply adult treatment criteria to children under 12. Treatment of chronic hepatitis B in children must therefore be considered carefully, and other causes of liver injury, including inherited liver disease (for example Wilson disease), must be excluded.</p>

<h2>Children under 2 years</h2>
<p><strong>Antiviral treatment is not indicated.</strong></p>

<h2>Children aged 2–11: treat only if one of the following applies</h2>
<ul>
  <li>Persistent hepatitis flares (at least 2 assessments within 6 months) and HBV DNA &gt; 2,000 IU/mL;</li>
  <li>Cirrhosis or advanced fibrosis (≥ F2);</li>
  <li>Coinfection or comorbidity that raises the risk of liver disease progression;</li>
  <li>Need for immunosuppressive therapy or chemotherapy.</li>
</ul>

<h2>Drugs for children aged 2–11</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Drug</th><th>Paediatric dose</th><th>Notes / side effects</th></tr></thead>
  <tbody>
    <tr><td>Entecavir (ETV)</td><td>Children ≥ 2 years: 0.015 mg/kg/day (maximum 0.5 mg/day)</td><td>Lactic acidosis</td></tr>
    <tr><td>Tenofovir disoproxil fumarate (TDF)</td><td>Children ≥ 2 years: 8 mg/kg/day (maximum 300 mg/day)</td><td>Kidney disease, Fanconi syndrome, osteoporosis, lactic acidosis. Do not use if eGFR &lt; 50 mL/min or osteoporosis.</td></tr>
    <tr><td>Tenofovir alafenamide (TAF)</td><td>25 mg/day, for children ≥ 6 years and weighing ≥ 25 kg</td><td>Weight gain, raised cholesterol, lactic acidosis. Do not use if eGFR &lt; 15 mL/min without dialysis.</td></tr>
    <tr><td>Interferon IFN-α-2b</td><td>Children ≥ 2 years: 6 million units/m² three times a week</td><td>Flu-like symptoms, fatigue, psychiatric effects, low white cell count, anorexia, weight loss</td></tr>
  </tbody>
</table></div>
<div class="callout"><p>Prevention remains the top priority for children: the birth-dose vaccine within the first 24 hours and all later doses on schedule. See <a href="#/bai/phong-benh-viem-gan-b">Hepatitis B prevention</a>.</p></div>`
},

/* 9 */
"xo-gan-ung-thu-gan": {
  title: "Cirrhosis and liver cancer: assessment and early detection",
  summary: "How to assess liver fibrosis, the Child-Pugh classification, and the liver cancer screening schedule for people with hepatitis B.",
  body: `
<div class="stats">
  <div><b>23,333</b><span>deaths from liver cancer, hepatitis B and C in Vietnam in 2022</span></div>
  <div><b>26,725</b><span>hepatitis B-related deaths in 2022 (modelled estimate)</span></div>
</div>

<h2>Liver fibrosis and cirrhosis</h2>
<p>Long-standing chronic hepatitis B can lead to liver fibrosis, cirrhosis and then hepatocellular carcinoma. Non-invasive assessment uses blood-based scores (APRI, FIB-4, M2BPGi, FibroTest) or liver stiffness measurement (FibroScan, elastography ultrasound, MR elastography).</p>
<div class="table-wrap"><table>
  <thead><tr><th>Stage</th><th>Suggested thresholds</th></tr></thead>
  <tbody>
    <tr><td>Significant fibrosis (≥ F2)</td><td>APRI &gt; 0.5 or FibroScan &gt; 7 kPa</td></tr>
    <tr><td>Cirrhosis (F4)</td><td>APRI &gt; 1 or FibroScan &gt; 12.5 kPa, or clinical signs of cirrhosis</td></tr>
  </tbody>
</table></div>
<p>The <strong>Child-Pugh</strong> classification: Child-Pugh A is compensated cirrhosis; Child-Pugh B and C are decompensated cirrhosis (ascites, bleeding from ruptured oesophageal varices, hepatic encephalopathy, jaundice). Liver stiffness should be measured only when the patient is not in acute hepatitis or a flare (ALT &lt; 5 times the upper limit of normal).</p>

<h3>Liver fibrosis staging by Metavir (Appendix 2 – Decision 1740/QD-BYT)</h3>
<p>Fibrosis has 4 stages F0–F4: <strong>F0–F1</strong> none or very mild; <strong>F ≥ 2</strong> significant fibrosis; <strong>F ≥ 3</strong> advanced fibrosis; <strong>F4</strong> is cirrhosis.</p>
<div class="table-wrap"><table>
  <thead><tr><th>Method</th><th>F0–F1</th><th>F2</th><th>F3</th><th>F4</th></tr></thead>
  <tbody>
    <tr><td>Liver stiffness (FibroScan)</td><td>≤ 7.0 kPa</td><td>&gt; 7.0 and ≤ 9.5 kPa</td><td>&gt; 9.5 and ≤ 12.5 kPa</td><td>&gt; 12.5 kPa</td></tr>
    <tr><td>APRI score</td><td>≤ 0.5</td><td colspan="2">&gt; 0.5 and ≤ 1 (F2–F3)</td><td>&gt; 1</td></tr>
    <tr><td>M2BPGi (C.O.I)</td><td>&lt; 0.79</td><td>0.79 – &lt; 1.14</td><td>1.14 – &lt; 1.3</td><td>≥ 1.3</td></tr>
  </tbody>
</table></div>
<p><strong>APRI</strong> = (AST ÷ upper limit of normal for AST) × 100 ÷ platelet count (10<sup>9</sup>/L); the conventional upper limit for AST is 40 U/L or the laboratory's value.</p>

<h3>Child-Turcotte-Pugh score</h3>
<div class="table-wrap"><table>
  <thead><tr><th>Criterion</th><th>1 point</th><th>2 points</th><th>3 points</th></tr></thead>
  <tbody>
    <tr><td>Hepatic encephalopathy</td><td>None</td><td>Grade 1–2</td><td>Grade 3–4</td></tr>
    <tr><td>Ascites</td><td>None</td><td>Mild</td><td>Moderate to severe</td></tr>
    <tr><td>Serum bilirubin</td><td>&lt; 2 mg/dL (&lt; 35 µmol/L)</td><td>2–3 mg/dL (35–50)</td><td>&gt; 3 mg/dL (&gt; 50)</td></tr>
    <tr><td>Serum albumin</td><td>&gt; 3.5 g/dL (&gt; 35 g/L)</td><td>2.8–3.5 g/dL (28–35)</td><td>&lt; 2.8 g/dL (&lt; 28)</td></tr>
    <tr><td>Prothrombin % / INR</td><td>&gt; 64% / &lt; 1.7</td><td>44–64% / 1.7–2.3</td><td>&lt; 44% / &gt; 2.3</td></tr>
  </tbody>
</table></div>
<p><strong>Child A:</strong> 5–6 points (compensated cirrhosis). <strong>Child B:</strong> 7–9 points and <strong>Child C:</strong> ≥ 10 points (decompensated cirrhosis).</p>

<h2>Warning signs: when to seek care or emergency help</h2>
<ul>
  <li><strong>Advancing cirrhosis</strong> is often silent for years; later there may be leg swelling (low albumin), a swollen belly from <strong>ascites</strong>, jaundice, persistent itching (bile salts) and fatigue and poor appetite.</li>
  <li><strong>Go to the emergency department at once</strong> for vomiting fresh blood or passing black coffee-ground stools (ruptured oesophageal varices), rapidly deepening jaundice, bleeding problems, drowsiness or coma (acute liver failure/encephalopathy).</li>
  <li>Chronic HBV infection raises liver cancer risk many-fold if not monitored; <strong>regular ultrasound and AFP</strong> help find tumours while small.</li>
</ul>

<h2>Early detection of liver cancer</h2>
<ul>
  <li><strong>Abdominal ultrasound:</strong> every 12–24 weeks; if suspicious, contrast-enhanced MRI or CT.</li>
  <li><strong>Liver cancer markers:</strong> AFP, AFP-L3, PIVKA II – every 24 weeks (1–3 markers depending on what the facility can do).</li>
  <li><strong>Upper endoscopy</strong> when cirrhosis is suspected, to detect oesophageal varices.</li>
</ul>

<h2>Living well with HBV</h2>
<ul>
  <li>Keep a sensible diet and a healthy weight.</li>
  <li>Avoid or strictly limit alcohol.</li>
  <li>Be careful with medicines that can harm the liver (some pain and fever medicines such as acetaminophen, anti-tuberculosis drugs, anticonvulsants, herbal remedies or supplements of unknown origin).</li>
  <li>Tell health workers about HBV infection when being treated for other conditions, especially when immunosuppression or chemotherapy is needed.</li>
</ul>`
},

/* 10 */

/* 11 */
"viet-nam-loai-tru-viem-gan": {
  title: "Vietnam on the road to eliminating hepatitis B and C by 2030",
  summary: "Epidemiology, progress against WHO targets, policies and main barriers, from the National Hepatitis Elimination Profile (updated Jun 2025).",
  body: `
<p>Vietnam aims to <strong>eliminate hepatitis B and C by 2030</strong> (including a goal to eliminate mother-to-child transmission of HBV). The viral hepatitis prevention and control plan for 2021–2025 (Decision 4531/QD-BYT, 2021) aims at decentralising services and integrating them with primary care.</p>

<h2>Burden of disease</h2>
<div class="stats">
  <div><b>9.4%</b><span>of adults HBsAg-positive (survey of 32 provinces, 25,649 people, 2018)</span></div>
  <div><b>≈ 7%</b><span>modelled HBsAg prevalence in 2022</span></div>
  <div><b>12,605</b><span>new HBV infections (2022, modelled)</span></div>
  <div><b>26,725</b><span>HBV-related deaths (2022, modelled)</span></div>
</div>
<p>For hepatitis C, chronic infection prevalence is about 0.92% (2022), with 17,944 new infections and 3,894 related deaths (2022).</p>

<h2>Progress against WHO targets</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Indicator</th><th>Vietnam</th><th>Target</th></tr></thead>
  <tbody>
    <tr><td>Newborns receiving hepatitis B vaccine (2023)</td><td>82%</td><td>WHO 2020: 50%</td></tr>
    <tr><td>Infants completing 3 vaccine doses (2023)</td><td>65%</td><td>WHO 2020: 90%</td></tr>
    <tr><td>People living with HBV who are diagnosed (2022)</td><td>41.67%</td><td>WHO 2020: 30%</td></tr>
    <tr><td>People living with HCV who are diagnosed (2022)</td><td>12.83%</td><td>WHO 2020: 30%</td></tr>
    <tr><td>Diagnosed people with HBV receiving appropriate treatment (2022)</td><td>3%</td><td>–</td></tr>
    <tr><td>HBsAg in children under 5 (2019)</td><td>0.64%</td><td>SDG: 1%</td></tr>
    <tr><td>HBV deaths per 100,000 population (2021)</td><td>14.5</td><td>WHO 2030: 4</td></tr>
  </tbody>
</table></div>
<p class="muted">Some vaccination figures differ between pages of the profile because of different reporting years and sources; the table follows the profile's progress charts.</p>

<h2>Policy highlights</h2>
<ul>
  <li>HBV and HCV testing has been mandatory in blood screening since 1992.</li>
  <li>Screening for HBV is recommended by risk group and by birth cohort (before 2003).</li>
  <li>Circular 35/2021 and Circular 20/2022 allow specimens to be sent between facilities and widen the facilities that can provide insurance-covered hepatitis services.</li>
  <li>A pilot of point-of-care testing with GeneXpert is under way with WHO support.</li>
  <li>Hepatitis B treatment is covered by health insurance at the standard rate (80–100%); hepatitis C treatment is covered at a maximum of 50%.</li>
</ul>

<h2>Main challenges</h2>
<ul>
  <li>The hepatitis B care pathway is complicated; HBV DNA and HBeAg tests are often unavailable at lower-level facilities.</li>
  <li>Knowledge of hepatitis B and C among primary-level health workers and the community is limited.</li>
  <li>Surveillance mostly captures hospitalised cases; data on people treated are sparse.</li>
  <li>Pregnant women are not routinely screened; HBIG is not covered by insurance.</li>
  <li>Hepatitis B vaccination for adults is self-paid.</li>
</ul>

<h2>Next steps</h2>
<p>Implement the viral hepatitis prevention and control plan for 2021–2025, decentralise hepatitis B and C services to primary level, raise the knowledge of frontline health workers, and promote screening and care at primary health facilities.</p>`
},

/* Added Nov 2026 */
"me-con-viem-gan-b": {
  title: "Preventing mother-to-child transmission of hepatitis B",
  summary: "HBsAg screening in pregnancy, when to use tenofovir (from the second trimester), vaccine and HBIG for the baby within 24 hours, breastfeeding and follow-up.",
  body: `
<p>In Vietnam, mother-to-child transmission is the main route of HBV infection, usually during labour and delivery. Prevention is set out in <strong>Decision 678/QD-BYT of 26 Feb 2025</strong> of the Ministry of Health (Flowchart 2, Appendix 1) and summarised in Appendix 6 of the 2026 hepatitis B guideline (Decision 1740/QD-BYT). When each step is followed, the baby can grow up free of the virus.</p>

<div class="stats">
  <div><b>1</b><span>HBsAg test for every pregnant woman at the first antenatal visit</span></div>
  <div><b>≤ 24 hours</b><span>vaccine for every newborn (plus HBIG if the mother is HBsAg-positive)</span></div>
  <div><b>2, 3, 4 months</b><span>three more doses of hepatitis B vaccine</span></div>
  <div><b>7–12 months</b><span>HBsAg test for babies born to infected mothers</span></div>
</div>

<h2>Step 1 – HBsAg test for every pregnant woman</h2>
<ul>
  <li>Done at the <strong>first antenatal visit</strong> or as early as possible (rapid test or laboratory immunoassay).</li>
  <li>No need to repeat if the status is already known. Retest only if the result was negative but there was a high risk of exposure to HBV in the last 3 months before delivery.</li>
  <li>Even with a negative result, the baby still needs the birth-dose vaccine within 24 hours.</li>
</ul>

<h2>Step 2 – HBsAg-positive: test HBV DNA or HBeAg</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Result</th><th>Tenofovir prophylaxis for the mother</th></tr></thead>
  <tbody>
    <tr><td><strong>HBV DNA ≥ 200,000 IU/mL</strong> or <strong>HBeAg-positive</strong></td><td><strong>Start tenofovir</strong> in the second trimester (from week 14 of pregnancy) as early as possible, until <strong>at least 3 months after delivery</strong> or until the baby has completed the scheduled vaccine doses.</td></tr>
    <tr><td>HBV DNA &lt; 200,000 IU/mL or HBeAg-negative</td><td>Tenofovir prophylaxis for the mother is not needed.</td></tr>
    <tr><td>HBV DNA and HBeAg <strong>cannot be tested</strong></td><td>Give tenofovir prophylaxis to <strong>all</strong> HBsAg-positive pregnant women.</td></tr>
  </tbody>
</table></div>
<ul>
  <li>Pregnant women with kidney disease or osteoporosis should preferably use TAF instead of TDF.</li>
  <li><strong>Entecavir must not be used</strong> in pregnancy. Women taking entecavir who become pregnant or plan to must switch to a tenofovir regimen (if planning pregnancy: switch at least 2 months beforehand).</li>
  <li>At the same time, the doctor <strong>assesses eligibility for long-term treatment</strong> using the adult criteria (significant fibrosis or cirrhosis; HBV DNA &gt; 2,000 IU/mL with raised ALT; coinfection, comorbidity, immunosuppression, family history of liver cancer/cirrhosis; persistently raised ALT when HBV DNA cannot be measured). If eligible, treatment continues long term.</li>
  <li>After delivery the mother is <strong>referred to an infectious-disease/liver facility</strong> for long-term follow-up: liver function and HBV DNA at 3 months postpartum, then treatment eligibility reviewed every 3 months. <strong>Stopping medicine needs a doctor's decision</strong>; if she does not yet meet long-term treatment criteria, ALT and HBV DNA are still monitored after stopping to catch flares early.</li>
</ul>

<h2>Step 3 – Interventions for the baby</h2>
<ul>
  <li><strong>Every newborn</strong> (even if the mother is HBsAg-negative or her status is unknown) gets the <strong>birth-dose hepatitis B vaccine within 24 hours</strong>, then three further doses on the immunisation schedule (at 2, 3 and 4 months).</li>
  <li>Babies born to an <strong>HBsAg-positive mother</strong> also receive <strong>hepatitis B immunoglobulin (HBIG)</strong> where available – ideally within 12 hours and no later than 24 hours after birth, at a different site from the vaccine.</li>
  <li>Mother and baby are referred to a hepatitis treatment facility for long-term follow-up and care.</li>
</ul>

<h2>Breastfeeding and daily care</h2>
<ul>
  <li>Ministry of Health guidance: <strong>all babies are breastfed</strong>, whether or not the mother is treated for hepatitis B.</li>
  <li>As a precaution, if the nipple is cracked and bleeding, pause breastfeeding on that side and express and discard the milk until it heals.</li>
  <li>A mother with HBV can hug, kiss and care for her baby normally. Caesarean section is <strong>not required</strong> – the mode of delivery depends on obstetric indications; vaccinating the baby is what matters most.</li>
</ul>

<h2>Follow-up of babies born to infected mothers</h2>
<ul>
  <li><strong>HBsAg test at 7–12 months of age</strong> to determine HBV status. If vaccination was delayed, test 1–2 months after the last dose.</li>
  <li>If HBsAg is positive, the child is monitored regularly at a hepatitis treatment facility.</li>
</ul>

<h2>Preparing for delivery</h2>
<ul>
  <li>Bring antenatal records with HBsAg/HBV DNA results and <strong>tell staff right away</strong> so the delivery team can prepare vaccine and HBIG.</li>
  <li>Deliver at a facility with delivery and newborn immunisation services; if HBIG is not available there, you will be referred to a unit that has it.</li>
  <li>Special situations (viral load close to the treatment threshold, newborn under 2,000 g…) need assessment by an obstetrician, infectious-disease doctor or paediatrician.</li>
</ul>

<div class="callout warn">
  <p>This is a summary for reference. The official regimen and the timing of starting and stopping medicine must follow the source documents (Decisions 678/QD-BYT and 1740/QD-BYT) and your obstetrician or infectious-disease doctor. Never start or stop medicine on your own.</p>
</div>

<h2>Role of commune/ward health stations</h2>
<p>Counselling and testing (or collecting samples for testing) pregnant women; post-test counselling and referral of positive cases; following up mother–baby pairs after birth and reminding families to bring the baby for testing at the right time; record-keeping and reporting.</p>

<h2>Situation in Vietnam</h2>
<ul>
  <li>The national profile notes that testing pregnant women for HBV is recommended, but routine screening for hepatitis B and C in pregnancy is not yet standard in practice.</li>
  <li>HBIG is available for exposed babies but is not covered by health insurance, so cost is a barrier.</li>
  <li>Knowledge of HBV prevention among pregnant women and health workers is limited.</li>
  <li>In 2019, HBsAg prevalence in children under 5 was 0.64% (95% CI 0.53–0.76%) – below the 1% Sustainable Development Goal target.</li>
</ul>`
},

"hiv-me-con": {
  title: "Preventing mother-to-child transmission of HIV, hepatitis B and syphilis",
  summary: "Main content of Decision 678/QD-BYT (2025): testing and counselling in pregnancy, HIV and syphilis prevention, follow-up of babies, and the roles of health facilities.",
  body: `
<h2>The guideline</h2>
<p>On <strong>26 Feb 2025</strong> the Ministry of Health issued <strong>Decision 678/QD-BYT</strong>, “Technical guidelines for interventions to prevent mother-to-child transmission of HIV, hepatitis B and syphilis”, updating Decision 2834/QD-BYT (2019). It implements the national action plan to eliminate mother-to-child transmission of the three infections for 2018–2030 (Decision 7130/QD-BYT), based on the WHO Western Pacific regional framework; the goal is to move towards elimination of all three by 2030. It applies to health facilities providing maternal and child health care and prevention of mother-to-child transmission.</p>

<h2>Four principles</h2>
<ul>
  <li><strong>All</strong> pregnant women are tested for HIV, HBsAg and syphilis at the first antenatal visit or as early as possible.</li>
  <li>Pregnant women diagnosed with HIV, HBV or syphilis receive interventions to prevent transmission to their child.</li>
  <li><strong>All</strong> newborns receive hepatitis B vaccine within the first 24 hours, even if the mother is uninfected or her status is unknown.</li>
  <li>All babies born to mothers with HIV, HBV or syphilis are managed and followed up after birth; facilities coordinate and report.</li>
</ul>

<h2>Counselling and testing in pregnancy</h2>
<ul>
  <li><strong>Before testing:</strong> explain the risk of mother-to-child transmission, the benefit of early testing (effective interventions protect mother and child) and the blood-draw process and turnaround time.</li>
  <li><strong>Testing:</strong> rapid tests or other suitable methods using products licensed by the Ministry of Health; dual tests (HIV and syphilis) are encouraged to cut cost and the number of blood draws.</li>
  <li>Do not retest if the status is known; retest only if negative within 3 months before delivery and at high risk. High-risk women should be advised to retest in the last trimester.</li>
  <li>A <strong>positive screening result</strong> does not mean disease – confirmatory testing is needed. The woman is counselled, referred for treatment, and her <strong>partner/husband is invited</strong> for counselling and testing.</li>
</ul>

<h2>Preventing HIV transmission</h2>
<ul>
  <li><strong>Pregnant women with HIV</strong> start antiretroviral therapy (ARV) <strong>as early as possible</strong> and are referred to an HIV care facility. If reactive to an HIV test in labour, start ARV at once and stop if confirmatory testing is negative.</li>
  <li><strong>High transmission risk:</strong> mother not on ARV or started ≤ 4 weeks before delivery; HIV viral load ≥ 1,000 copies/mL; or HIV diagnosed within 72 hours before or at delivery.</li>
  <li><strong>Babies born to mothers with HIV</strong> receive ARV prophylaxis straight after birth, with one or two drugs depending on risk, plus counselling on infant feeding (breast milk, pasteurised donor milk or formula) before and right after birth, and adherence support.</li>
  <li><strong>Early infant diagnosis:</strong> nucleic acid testing (NAT) at 0–2 days for infants exposed at birth and/or at 4–6 weeks; if negative, clinical follow-up and repeat NAT at 9 months; antibody test at 18 months or 3 months after stopping breastfeeding. Exposed infants get co-trimoxazole prophylaxis, and ARV treatment immediately if HIV is confirmed.</li>
</ul>

<h2>Preventing hepatitis B transmission</h2>
<p>See the detailed article <a href="#/bai/me-con-viem-gan-b">Preventing mother-to-child transmission of hepatitis B</a>: HBsAg testing; tenofovir from the second trimester if HBV DNA ≥ 200,000 IU/mL or HBeAg-positive; vaccine and HBIG within 24 hours; babies are breastfed; HBsAg test for the baby at 7–12 months. For HBV/HIV coinfection see <a href="#/bai/viem-gan-b-dac-biet">Hepatitis B in special groups</a>.</p>

<h2>Preventing syphilis transmission</h2>
<ul>
  <li>Pregnant women with a positive rapid syphilis test are <strong>treated immediately</strong> to prevent transmission; treatment can be given at obstetric facilities. Where RPR/VDRL is available, treat once both tests are positive.</li>
  <li>Treatment uses penicillin (benzathine penicillin) according to stage (early, under 2 years, or late/unknown duration). Alternatives exist if penicillin is unavailable or the woman is allergic. <strong>Doxycycline must not be used</strong> in pregnancy. Erythromycin does not cross the placenta and so does not treat the fetus – the newborn must be treated early.</li>
  <li>Syphilis treatment is mostly outpatient; inpatient care is for complications (cardiovascular, neurological) and congenital syphilis. Partners need counselling and testing.</li>
  <li><strong>Babies born to mothers with syphilis:</strong> examined for signs of congenital syphilis (blisters, rhinitis, enlarged liver/spleen, bone lesions, meningitis…). If the mother was treated early and fully and the baby has no signs: close follow-up at 6, 10 and 14 weeks and 9 months. If the mother was untreated, treated late (within 30 days before birth) or incompletely, or the baby has symptoms: the baby is tested and treated under the congenital syphilis regimen. The baby is fed and cared for normally.</li>
</ul>

<h2>Responsibilities of facilities</h2>
<ul>
  <li><strong>Obstetric facilities:</strong> counselling, testing, preventive treatment; birth-dose hepatitis B vaccine within 24 hours for every baby, and HBIG for babies of HBsAg-positive mothers if available or referral to a unit with immunisation services.</li>
  <li><strong>HIV, infectious disease/liver, dermatology and paediatric facilities:</strong> treat mother and child for each infection; refer mother–baby pairs to the right facility.</li>
  <li><strong>Commune/ward health stations:</strong> counselling and testing (or sample collection), referral of positive cases, follow-up of mother–baby pairs after birth, reminders for infant testing, record-keeping and reporting.</li>
  <li><strong>Provincial/city Centres for Disease Control:</strong> focal point integrating activities into reproductive health and HIV/AIDS plans, monitoring and reporting.</li>
</ul>

<div class="callout warn">
  <p>This is a summary for health education. Drug regimens, doses and schedules for an individual must be decided by an obstetrician, infectious-disease doctor or paediatrician following the source document (Decision 678/QD-BYT) and Ministry of Health specialty guidelines.</p>
</div>`
},

"giai-doan-nhiem-hbv-man": {
  title: "Phases of chronic HBV infection",
  summary: "A table distinguishing immune-tolerant, active, inactive and reactivated phases, the grey zone and occult hepatitis B (Appendix 1 – Decision 1740/QD-BYT).",
  body: `
<p>Chronic HBV infection is not always in one state. Over time the virus and the immune system interact and the disease moves through several phases. The phase is determined from HBsAg, HBeAg, HBV DNA, ALT and the degree of liver damage – <strong>assessed by a doctor</strong>; patients should not interpret it themselves.</p>
<div class="callout"><p><strong>Key message:</strong> “inactive” <em>does not mean cured</em>. The virus is still in the liver and can become active again, so regular check-ups are still needed (usually every 3–6 months when medicine is not yet indicated).</p></div>

<h2>Table of chronic HBV phases</h2>
<div class="table-wrap"><table>
  <thead><tr><th></th><th>HBeAg-positive chronic infection</th><th>HBeAg-positive chronic hepatitis</th><th>HBeAg-negative chronic infection</th><th>HBeAg-negative chronic hepatitis</th><th>Grey zone</th><th>Occult hepatitis B</th></tr></thead>
  <tbody>
    <tr><td><strong>Also called</strong></td><td>Immune-tolerant</td><td>Immune-active</td><td>Inactive carrier</td><td>Reactivation</td><td>Indeterminate</td><td>Indeterminate</td></tr>
    <tr><td><strong>HBsAg</strong></td><td>Positive</td><td>Positive</td><td>Positive</td><td>Positive</td><td>Positive</td><td>Negative</td></tr>
    <tr><td><strong>qHBsAg</strong> (log10 IU/mL)</td><td>3.5–4.5</td><td>3.5–4.5</td><td>2.5–3.5</td><td>2–3</td><td>2–3</td><td>Negative</td></tr>
    <tr><td><strong>HBeAg</strong></td><td>Positive</td><td>Positive</td><td>Negative</td><td>Negative</td><td>Negative</td><td>Negative</td></tr>
    <tr><td><strong>Anti-HBe</strong></td><td>Negative</td><td>Negative</td><td>Positive</td><td>Positive</td><td>Positive</td><td>May be positive</td></tr>
    <tr><td><strong>HBV DNA</strong> (IU/mL)</td><td>Usually &gt; 10<sup>7</sup></td><td>Usually 10<sup>5</sup>–10<sup>7</sup></td><td>&lt; 10<sup>3</sup></td><td>Usually 10<sup>3</sup>–10<sup>5</sup></td><td>2,000–20,000</td><td>Low, near the detection limit</td></tr>
    <tr><td><strong>ALT</strong></td><td>Normal</td><td>Raised</td><td>Normal</td><td>Raised</td><td>Fluctuating</td><td>Normal</td></tr>
    <tr><td><strong>Histology</strong> (liver biopsy)</td><td>Minimal necroinflammation or fibrosis</td><td>Moderate to severe necroinflammation, any fibrosis stage</td><td>Minimal necroinflammation and fibrosis</td><td>Moderate to severe necroinflammation or fibrosis</td><td>Minimal to mild necroinflammation</td><td>Minimal to mild necroinflammation, possible fibrosis</td></tr>
    <tr><td><strong>HBcrAg</strong></td><td>High</td><td>High</td><td>Low or undetectable</td><td>Low</td><td>May be detectable</td><td>Insufficient data</td></tr>
    <tr><td><strong>HBV RNA</strong></td><td>High</td><td>High</td><td>Low or undetectable</td><td>Low</td><td>May be detectable</td><td>Insufficient data</td></tr>
  </tbody>
</table></div>

<h2>In plain words</h2>
<ul>
  <li><strong>HBeAg-positive</strong> usually goes with active viral replication, a high viral load and higher infectiousness.</li>
  <li><strong>Immune-tolerant phase:</strong> lots of virus but normal ALT and little liver inflammation. Monitoring is still needed because it can progress to the active phase.</li>
  <li><strong>Inactive phase:</strong> low viral load and normal ALT – the virus is “resting” but can reactivate, so lifelong monitoring is needed.</li>
  <li><strong>Grey zone:</strong> results fall between phases and cannot be clearly classified – needs close follow-up and further assessment of liver fibrosis.</li>
  <li><strong>Occult infection:</strong> HBsAg is negative but a very low level of HBV DNA is present; most important in immunosuppressed people.</li>
</ul>
<p>The decision to start medicine is not based on “phase” alone but on treatment criteria: degree of liver fibrosis, HBV DNA, ALT and risk factors – see <a href="#/bai/viem-gan-b-man">Chronic hepatitis B</a>.</p>`
},

"duong-lay-khong-lay": {
  title: "How hepatitis B spreads – and contact that does NOT spread it",
  summary: "The three main routes, features of the virus, and everyday activities that do not transmit HBV.",
  body: `
<div class="callout"><p><strong>Key message:</strong> HBV spreads through <strong>blood</strong>, <strong>unprotected sex</strong> and <strong>from mother to child</strong>. HBV does <strong>not</strong> spread through eating together, hugging, kissing, handshakes, coughing or sneezing, or mosquito bites.</p></div>

<h2>Three routes of transmission</h2>
<ul>
  <li><strong>Blood:</strong> unscreened blood or blood products, shared needles, unsterilised skin-piercing equipment (tattoos, piercings, manicures, dental work), and shared items that may carry blood (razors, toothbrushes, nail clippers, finger-prick devices).</li>
  <li><strong>Unprotected sex</strong> with an infected person whose partner has no protective antibodies.</li>
  <li><strong>Mother to child</strong> – the main route in Vietnam, usually <strong>during labour and delivery</strong>. It can be prevented effectively (see <a href="#/bai/me-con-viem-gan-b">Preventing mother-to-child transmission</a>).</li>
</ul>

<h2>Features of the virus that explain how it spreads</h2>
<ul>
  <li>HBV is a <strong>virus</strong> (family <em>Hepadnaviridae</em>, DNA genome) with 10 genotypes A–J; it mainly enters and multiplies in <strong>liver cells</strong>.</li>
  <li>The concentration of virus in <strong>blood</strong> is very high, and the virus can <strong>survive outside the body for at least 7 days</strong> on dried blood, so sharp objects or equipment stained with blood remain a risk.</li>
  <li>The virus is inactivated by proper sterilisation (high-pressure steam/boiling for long enough) and suitable disinfectants such as 70% alcohol or chlorine-based solutions.</li>
  <li><strong>Anti-HBs ≥ 10 IU/L</strong> helps the body keep the virus out of liver cells – the “shield” provided by vaccination or recovery from infection.</li>
</ul>

<h2>Contact that does NOT spread HBV</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Situation</th><th>Transmission?</th></tr></thead>
  <tbody>
    <tr><td>Sharing a meal, bowls and chopsticks, a dipping sauce, a cup or bottle</td><td>No</td></tr>
    <tr><td>Hugging, shaking hands, social kissing, sharing a room or office, living in a dormitory</td><td>No</td></tr>
    <tr><td>Coughing, sneezing, talking (HBV is not airborne)</td><td>No</td></tr>
    <tr><td>Sharing a toilet or bath, swimming in the same pool</td><td>No</td></tr>
    <tr><td>Mosquito or other insect bites</td><td>No</td></tr>
    <tr><td>Dried blood on clothing touching <em>intact skin</em></td><td>No (intact skin is a barrier)</td></tr>
    <tr><td>Donating blood at a licensed site (sterile single-use needle)</td><td>Does not raise the donor's risk of infection</td></tr>
  </tbody>
</table></div>

<h2>Contact that DOES carry risk</h2>
<ul>
  <li>Infected blood coming into direct contact with an open wound or scratches.</li>
  <li>Sharing razors, toothbrushes, nail clippers, finger-prick needles or lancets.</li>
  <li>Manicures, tattoos, piercings or tooth extraction with equipment that is not properly sterilised.</li>
  <li>A bite that breaks the skin and bleeds.</li>
  <li>Sex without a condom when the partner has no protective antibodies.</li>
</ul>
<p>See practical prevention in <a href="#/bai/song-chung-an-toan-gia-dinh">Preventing infection at home and in daily life</a>.</p>`
},

"song-chung-an-toan-gia-dinh": {
  title: "Preventing hepatitis B at home and in daily life",
  summary: "What to do after a needlestick, staying safe at nail salons, barbers and tattoo studios, caring for wounds, cleaning blood, and what families should do.",
  body: `
<h2>When someone in the family has HBV</h2>
<ul>
  <li>Everyone living together should be <strong>tested for HBsAg and anti-HBs</strong>. Those who are uninfected and have no antibodies (anti-HBs &lt; 10 IU/L) need a <strong>full vaccine course</strong>.</li>
  <li><strong>Keep eating together and sharing bowls and chopsticks</strong> – there is no need for separate dishes or boiling utensils.</li>
  <li>Each person uses their <strong>own</strong> toothbrush, razor, nail clippers and finger-prick lancets.</li>
  <li>Couples: use condoms until the partner has completed vaccination and has <strong>anti-HBs ≥ 10 IU/L</strong>.</li>
  <li>People with HBV should tell family members and their partner so they can be tested and vaccinated.</li>
</ul>

<h2>After a needle or blood-stained sharp object injury</h2>
<ol>
  <li><strong>Wash at once</strong> under running water with soap. <strong>Do not squeeze or press</strong> the wound.</li>
  <li>If blood splashes into the <strong>eyes or a mucous membrane</strong>: rinse continuously with 0.9% saline or clean water.</li>
  <li>Go to a <strong>health facility within 24 hours</strong> for testing and advice on post-exposure prophylaxis (see <a href="#/bai/phong-benh-viem-gan-b">Preventing hepatitis B</a>).</li>
  <li>If a child is pricked by a used needle in a public place: do the same and take the child to a health facility <strong>within 24 hours</strong>.</li>
</ol>

<h2>Beauty treatments and skin-piercing procedures</h2>
<ul>
  <li><strong>Nails:</strong> choose a reputable salon; use sterilised tools or bring your own set.</li>
  <li><strong>Shaving, haircuts:</strong> ask for a new razor blade in front of you.</li>
  <li><strong>Tattoos, piercings:</strong> only at places with sterilising equipment that use new needles from sealed packs.</li>
  <li><strong>Dental and medical procedures:</strong> only at facilities that guarantee sterility.</li>
</ul>

<h2>Caring for wounds and cleaning blood</h2>
<ul>
  <li>Wear <strong>gloves</strong> when touching someone else's bleeding wound.</li>
  <li>Blood on the floor: wear gloves, cover with a chlorine-based disinfectant or 70% alcohol, then wipe up, following the product instructions.</li>
  <li>Blood-stained clothes: wash with ordinary laundry soap.</li>
  <li>Needles, sharps and blood-stained waste: <strong>seal</strong> in a separate bag/container labelled “blood-stained waste” before disposal to protect sanitation workers.</li>
</ul>

<div class="callout warn"><p>Some detailed instructions (rinsing time, disinfectant concentration) come from MAI's health-education question bank; check with a health worker when applying them in a specific situation.</p></div>`
},

"dinh-duong-loi-song-gan": {
  title: "Nutrition, lifestyle and liver protection with hepatitis B",
  summary: "Avoiding alcohol, balanced eating, careful use of painkillers/fever medicines and supplements, exercise, sleep, and things to avoid.",
  body: `
<p>Ministry of Health guidance advises people with HBV to keep <strong>a sensible diet and healthy weight</strong>, <strong>avoid or strictly limit alcohol</strong>, be careful with medicines and herbs that may harm the liver, and tell health workers about their HBV infection when treated for other conditions.</p>

<h2>Eating and drinking</h2>
<ul>
  <li>Eat a <strong>balanced diet with all 4 food groups</strong> (starch, protein, healthy fats, vitamins and minerals); choose varied fresh, clean food.</li>
  <li><strong>No need for extreme restrictions</strong> without a specific indication – including red meat and eggs. The liver needs enough protein to regenerate.</li>
  <li><strong>Alcohol and beer:</strong> avoid or strictly limit; they damage the liver and speed up cirrhosis and liver cancer.</li>
  <li><strong>Mouldy food</strong> (peanuts, beans, maize) contains <strong>aflatoxin</strong>, a potent liver carcinogen that acts together with HBV. Throw mouldy food away.</li>
  <li><strong>Eat cooked food, drink boiled water</strong>; limit raw or undercooked dishes to avoid parasites and bacteria that harm the liver and bile ducts.</li>
  <li>People with <strong>cirrhosis with oedema or ascites</strong>: reduce salt as advised by the doctor.</li>
  <li>Overweight, obesity and fatty liver make liver disease progress faster – control weight, cut sugary and fatty foods; check blood sugar and blood fats regularly.</li>
</ul>

<h2>Medicines, vitamins and herbs</h2>
<ul>
  <li><strong>Do not use herbal teas</strong> (such as ca gai leo or chó đẻ) in place of antiviral medicine: they do not kill the virus and misuse can harm the liver.</li>
  <li>Be careful with supplements of unknown origin, some painkillers/fever medicines such as acetaminophen (paracetamol), TB drugs and anticonvulsants.</li>
  <li><strong>Paracetamol:</strong> use only at the labelled dose, not for long periods, and <strong>never with alcohol</strong>; ask a pharmacist or doctor what maximum dose suits you.</li>
  <li>Do not self-prescribe high-dose vitamins (fat-soluble vitamin A in particular can accumulate and damage the liver).</li>
  <li>When seeing a doctor or buying medicine for another problem, <strong>always say</strong> you have HBV and are taking hepatitis B medicine.</li>
</ul>

<h2>Lifestyle</h2>
<ul>
  <li><strong>Do not smoke</strong>, including e-cigarettes – it increases liver toxicity and liver cancer risk.</li>
  <li><strong>Exercise</strong> at a comfortable level (walking, cycling, yoga), about 30 minutes a day.</li>
  <li><strong>Sleep</strong> 7–8 hours and avoid long periods of late nights.</li>
  <li>Limit prolonged stress; seek psychological support when needed.</li>
  <li>Drink enough water (about 1.5–2 litres a day unless you have a condition that restricts fluids, such as ascites).</li>
</ul>

<div class="callout"><p>People with HBV can study, work, play sports and live normally if monitored and treated as indicated. Modern antiviral medicines (NAs) are usually well tolerated and rarely affect driving or work – tell your doctor about any unusual side effects.</p></div>`
},

"hieu-lam-ky-thi-hbv": {
  title: "Common myths about hepatitis B – and why stigma must end",
  summary: "Quick fact-checks of widely shared misinformation: spread by eating, mosquitoes, “death sentence”, stopping medicine, herbal tea, breastfeeding, marriage, work…",
  body: `
<p>Each item follows the MAI Verify structure: <strong>claim in circulation → verdict → explanation → recommendation</strong>.</p>

<div class="table-wrap"><table>
  <thead><tr><th>Claim in circulation</th><th>Verdict</th><th>Explanation and recommendation</th></tr></thead>
  <tbody>
    <tr><td>“Sharing a meal or bowls and chopsticks spreads hepatitis B.”</td><td><strong>False</strong></td><td>HBV does not spread through food, saliva or social contact. No need to eat separately; only avoid sharing items that may carry blood (razors, toothbrushes).</td></tr>
    <tr><td>“Mosquito bites can transmit hepatitis B.”</td><td><strong>False</strong></td><td>The virus does not multiply or stay infectious in mosquitoes. Still protect yourself from mosquitoes because of other diseases such as dengue.</td></tr>
    <tr><td>“Hugging, handshakes, coughing, sneezing, shared toilets or pools also spread it.”</td><td><strong>False</strong></td><td>It spreads only through blood, sex and from mother to child. You can socialise, study and work normally.</td></tr>
    <tr><td>“Hepatitis B is a death sentence.”</td><td><strong>False</strong></td><td>Most people who are monitored and treated as indicated live healthy lives with a normal life expectancy. Keep up regular check-ups.</td></tr>
    <tr><td>“Chronic hepatitis B can now be completely cured.”</td><td><strong>Not accurate</strong></td><td>There is no drug that completely eliminates the virus yet, but antivirals control the disease effectively and protect the liver long term.</td></tr>
    <tr><td>“Normal liver enzymes mean you don't have hepatitis B.”</td><td><strong>False</strong></td><td>Many people with chronic infection have normal liver enzymes. Only an HBsAg test shows whether you are infected.</td></tr>
    <tr><td>“If I feel well and my liver enzymes are normal I can stop my medicine.”</td><td><strong>False – dangerous</strong></td><td>The medicine is keeping the virus “asleep”. Stopping on your own can cause a flare and liver failure. Only a doctor decides to stop, when criteria are met.</td></tr>
    <tr><td>“Herbal tea (ca gai leo, chó đẻ…) can replace antiviral medicine.”</td><td><strong>False</strong></td><td>Herbal teas do not kill the virus and may harm the liver. Take medicine as prescribed; ask a doctor before using supplements.</td></tr>
    <tr><td>“Hepatitis B vaccine will cure people who are already infected.”</td><td><strong>False</strong></td><td>The vaccine only prevents infection in people who are not infected. HBsAg-positive people need to be seen and treated as indicated.</td></tr>
    <tr><td>“The hepatitis B vaccine also protects against hepatitis A and C.”</td><td><strong>False</strong></td><td>Each vaccine protects only against its own virus.</td></tr>
    <tr><td>“The hepatitis B vaccine affects fertility.”</td><td><strong>False</strong></td><td>There is no evidence of an effect on fertility; women planning pregnancy should check immunity and be vaccinated before conceiving if they have no antibodies.</td></tr>
    <tr><td>“A mother with hepatitis B must not breastfeed.”</td><td><strong>False</strong> (once the baby has prophylaxis)</td><td>Babies who received vaccine and HBIG as recommended can breastfeed normally. If the nipple cracks and bleeds, pause that side and discard the milk until it heals.</td></tr>
    <tr><td>“A mother with hepatitis B must have a caesarean.”</td><td><strong>Not required</strong></td><td>The mode of delivery depends on obstetric indications; what matters is vaccinating the baby and giving HBIG within the first 24 hours.</td></tr>
    <tr><td>“People with hepatitis B must avoid red meat and eggs and follow a strict diet.”</td><td><strong>False</strong></td><td>Eat a balanced diet from all 4 food groups; extreme restriction causes malnutrition. Avoiding alcohol is what matters.</td></tr>
    <tr><td>“People with hepatitis B cannot marry, go to school, work or play sports.”</td><td><strong>False</strong></td><td>They have the right to marry and have children safely with proper advice; children can attend school; refusing to hire or dismissing someone only because of HBV is stigma and not in line with regulations (some special occupations have their own health standards set by law).</td></tr>
    <tr><td>“Hepatitis B is linked to vice or a person's morals.”</td><td><strong>False</strong></td><td>It is an infectious disease caused by a virus and has nothing to do with character or morals.</td></tr>
  </tbody>
</table></div>

<h2>Why is stigma harmful?</h2>
<ul>
  <li>It makes people <strong>hide</strong> their infection, avoid check-ups and not tell family to be tested and vaccinated – so the virus spreads more silently.</li>
  <li>It hurts emotionally but <strong>does not prevent disease</strong>.</li>
  <li>A supportive community without stigma encourages everyone to get tested, vaccinated and stay on treatment.</li>
</ul>
<div class="callout"><p><strong>The right attitude:</strong> respect, understanding and support; encourage family to be tested and vaccinated; share information from reliable sources (Ministry of Health, HCMC Department of Health, HCDC, reputable hospitals).</p></div>`
},

"tiep-can-y-te-bhyt": {
  title: "Testing, care and treatment for hepatitis B: primary care and health insurance",
  summary: "Where to be tested, vaccinated and get medicine; when to be referred; how to use health insurance and reliable information sources in Ho Chi Minh City.",
  body: `
<h2>Tiered care under Ministry of Health guidance</h2>
<ul>
  <li>Diagnosis and treatment of hepatitis B are being <strong>decentralised to primary and basic-level facilities</strong> (health stations, district health centres…) within their professional scope and covered by health insurance.</li>
  <li>Primary and basic facilities manage and supply medicine for patients in a <strong>stable phase</strong> (no cirrhosis or compensated cirrhosis). When stable, patients <strong>do not necessarily</strong> have to go to a higher-level hospital for each check-up.</li>
  <li><strong>Referral to specialised care</strong> when there is decompensated cirrhosis (Child-Pugh B, C), suspected treatment failure (drug resistance) or severe/complex disease; referral works both ways.</li>
  <li>The guideline also encourages: integrating HBV testing into routine care; using rapid HBsAg tests where suitable; testing HBV DNA soon after a positive HBsAg; appointment reminders; integration with HIV, reproductive health and harm-reduction programmes.</li>
</ul>

<h2>What can residents of Ho Chi Minh City do?</h2>
<ul>
  <li><strong>HBsAg screening:</strong> at commune/ward health stations, district health centres and hospitals. You can also add HBsAg to a workplace health check if you have never been tested. No fasting is needed for HBsAg and anti-HBs tests.</li>
  <li><strong>Vaccination:</strong> babies are vaccinated free under the Expanded Programme on Immunisation (birth dose within 24 hours, then 5-in-1 or 6-in-1 vaccine at 2, 3 and 4 months). Adults can be vaccinated at health stations or vaccination centres (currently self-paid).</li>
  <li><strong>Health insurance:</strong> hepatitis B treatment is covered at the usual rate (80–100%). Bring your <strong>insurance card, citizen ID and medical record book</strong> plus old test results and prescriptions, and attend within your registered tier. If you have no card, join household health insurance; people in hardship should contact the ward People's Committee/health station about support.</li>
  <li><strong>Specialist facilities:</strong> when indicated or if in-depth care is needed, hospitals such as the Hospital for Tropical Diseases HCMC, University Medical Center, Cho Ray Hospital; for pregnant women Tu Du Hospital, Hung Vuong Hospital and other specialist or general hospitals with gastroenterology–hepatology or infectious-disease services.</li>
  <li><strong>Electronic health records</strong> at health stations store test history, medication history and remind you of check-ups.</li>
  <li><strong>Where to ask:</strong> health workers at health stations, the HCMC Centre for Disease Control (HCDC), hotlines/advice channels of health stations; look for information on official pages of the Ministry of Health, the HCMC Department of Health, HCDC and reputable hospitals.</li>
</ul>

<div class="callout warn"><p>Insurance coverage, facility lists and phone numbers can change. Confirm with the health station or facility before you go.</p></div>`
},

"du-phong-tai-hoat-hbv": {
  title: "Preventing hepatitis B reactivation during immunosuppression or chemotherapy",
  summary: "Three risk levels of HBV reactivation, when to start and how long to continue preventive medicine (Appendix 3 – Decision 1740/QD-BYT).",
  body: `
<p>When the body's immunity is weakened by certain treatments (cancer chemotherapy, immunosuppressants, long-term corticosteroids, transplants…), HBV “sleeping” in the liver can <strong>become active again (reactivate)</strong>, causing severe hepatitis that can be life-threatening. This can happen both in people who are HBsAg-positive and in those who are HBsAg-negative but anti-HBc-positive (past infection).</p>

<h2>What to do before starting treatment</h2>
<ul>
  <li>Test <strong>HBsAg, anti-HBc and HBV DNA</strong> for everyone about to have chemotherapy, immunosuppressants or a transplant.</li>
  <li><strong>Tell the doctor</strong> treating your main illness that you have or have had HBV.</li>
</ul>

<h2>Three levels of reactivation risk</h2>
<div class="table-wrap"><table>
  <thead><tr><th>Risk level</th><th>Reactivation rate</th><th>Management in the guideline</th></tr></thead>
  <tbody>
    <tr><td><strong>High</strong></td><td>&gt; 10%</td><td>Start antiviral prophylaxis <strong>2 weeks before or at the latest together with</strong> the risky drug; continue for <strong>at least 6 months</strong> after stopping immunosuppression/chemotherapy (<strong>at least 12 months</strong> for B-cell-depleting agents).</td></tr>
    <tr><td><strong>Intermediate</strong></td><td>1–10%</td><td>Start antiviral prophylaxis 2 weeks before or at the latest together with the drug; continue at least 6 months after stopping.</td></tr>
    <tr><td><strong>Low</strong></td><td>&lt; 1%</td><td>No antiviral prophylaxis needed but <strong>monitoring is required</strong> throughout treatment.</td></tr>
  </tbody>
</table></div>
<p>The risk level depends on the <strong>drug/therapy</strong> (for example dose and duration of corticosteroids, B-cell-depleting agents, anti-TNF therapy, anthracycline chemotherapy…) and on the patient's serology (HBsAg-positive versus anti-HBc-positive only). Classification is done by a specialist doctor.</p>

<h2>Preventive medicines</h2>
<p>TDF, TAF or entecavir (ETV) are used. For organ transplants, prophylaxis follows the transplant programme. People with HBV/HCV coinfection treated with DAAs also need liver-enzyme monitoring – see <a href="#/bai/viem-gan-b-dac-biet">Hepatitis B in special groups</a>.</p>
<div class="callout warn"><p>Never start or stop preventive medicine on your own. The start and end times are decided by the specialist (infectious disease/hepatology, oncology, rheumatology…).</p></div>`
},

"that-bai-dieu-tri-theo-doi": {
  title: "Treatment failure, drug resistance and follow-up after stopping antivirals",
  summary: "How to recognise treatment failure, principles for switching or combining drugs, monitoring after stopping, and why everyone needs liver cancer screening.",
  body: `
<h2>Preventing failure: adherence matters most</h2>
<ul>
  <li>Take medicine <strong>regularly every day, on time, at the right dose</strong>. Irregular use, skipping doses or switching on your own lets resistant virus emerge.</li>
  <li>If you miss a dose: take it as soon as you remember that day; if it is nearly time for the next dose, take the next one and <strong>never double up</strong>. Missing several days in a row needs a visit to a health facility.</li>
  <li>The doctor checks adherence at <strong>every visit</strong> and gives extra support to those who find it hard.</li>
</ul>

<h2>What counts as treatment failure?</h2>
<ul>
  <li><strong>Primary failure:</strong> HBV DNA falls by less than 1 log10 IU/mL within 3 months of starting the drug.</li>
  <li><strong>Secondary failure:</strong> HBV DNA rises by more than 1 log10 IU/mL above the lowest level achieved, after an initial response.</li>
  <li>Where HBV DNA cannot be measured: suspect failure with a low-resistance-barrier drug, poor adherence plus raised ALT and/or evidence of progressive liver disease.</li>
</ul>
<div class="callout"><p><strong>Before concluding failure</strong>, adherence must be assessed and supported and the viral load re-checked if possible; the assessment to switch or combine drugs should not take longer than 4 weeks. If available, sequencing for resistance mutations is recommended.</p></div>

<h2>Management</h2>
<ul>
  <li>Change drugs only after adherence has been supported and failure is confirmed.</li>
  <li>Principle: switch to a drug with <strong>strong potency, high resistance barrier and no cross-resistance</strong> with the previous regimen (preferably tenofovir TDF/TAF or entecavir). Combining several nucleos(t)ide drugs is <strong>not routinely recommended</strong> and is considered only in complex resistance.</li>
</ul>
<div class="table-wrap"><table>
  <thead><tr><th>Failure on current drug</th><th>Switch to</th><th>Combination option</th></tr></thead>
  <tbody>
    <tr><td>Entecavir</td><td>Tenofovir (TDF or TAF)</td><td>Entecavir + tenofovir (TDF or TAF), or TDF + FTC</td></tr>
    <tr><td>TDF</td><td>Entecavir or TAF</td><td>Tenofovir (TDF or TAF) + entecavir</td></tr>
    <tr><td>Multidrug resistance</td><td>Tenofovir (TDF or TAF)</td><td>Tenofovir (TDF or TAF) + entecavir</td></tr>
  </tbody>
</table></div>
<p>People with kidney disease need dose adjustment or a change of drug according to kidney function (for example avoid TDF when eGFR &lt; 50 mL/min; TAF needs no reduction). This is the doctor's decision. Suspected treatment failure should be referred to a specialised facility.</p>

<h2>Follow-up after stopping antivirals</h2>
<ul>
  <li><strong>First year:</strong> blood count, AST/ALT and bilirubin every 4–12 weeks; abdominal ultrasound and HBV DNA every 12–24 weeks.</li>
  <li><strong>Later years:</strong> AST and ALT every 12–24 weeks; HBV DNA every 24–48 weeks.</li>
  <li><strong>After stopping Peg-IFN:</strong> monitor HBeAg (if previously positive), HBsAg and HBV DNA every 12 weeks for at least 1 year, then every 12–24 weeks for the next 5 years.</li>
  <li>Reactivation is HBV DNA ≥ 2,000 IU/mL; consider retreatment when &gt; 10,000 IU/mL regardless of ALT.</li>
</ul>
<div class="callout warn"><p><strong>Everyone with HBV</strong> – untreated, on treatment or after stopping – needs <strong>liver cancer screening every 12–24 weeks</strong> with abdominal ultrasound and liver cancer markers (AFP and/or AFP-L3 and/or PIVKA II). If a liver mass is suspected, contrast CT or MRI is done.</p></div>`
},

};
