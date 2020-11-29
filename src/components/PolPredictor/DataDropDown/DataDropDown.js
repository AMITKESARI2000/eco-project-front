import React from 'react';
import {Card, Accordion} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './DataDropDown.css';
import indiaMap from './india.webp';
import info from './Info1.jpg';
import success from './Sucess1.jpg';
import warning from './Warning1.jpg';
import danger from './Danger1.jpg';
import default1 from './MainImg.jpg';
class DataDropDown extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      states: [],
      districts: [],
      nutrients: [],
      pH: '',
      bg: 'light',
      selectedState: '--Choose State--',
      selectedDistrict: '--Choose District--',
      sorce: default1,
      solutions: [
        {
          Nitrogen: [
            {
              OrganicMethod: [
                'Adding composted manure to the soil',
                'Planting a green manure crop, such as borage',
                'Planting nitrogen-fixing plants like peas or beans',
                'Adding coffee grounds to the soil',
              ],
            },
            {
              NonOrganicMethod: [
                'Nitrogen as a plant fertilizer is common when purchasing chemical fertilizers. When looking to specifically add nitrogen to your garden, ',
                'choose a fertilizer that has a high first number in the NPK ratio.',
                'The NPK ratio will look something like 10-10-10 and the first number tells you the amount of nitrogen.',
                'Using a nitrogen fertilizer to fix a nitrogen deficiency in the soil will give a big, fast boost of nitrogen to the soil, but will"fade quickly"',
              ],
            },
          ],
        },
        {
          Potassium: [
            {
              OrganicMethod: [
                'feeding with home-made comfrey liquid',
                'adding seaweed meal',
                'composted bracken',
                'compost rich in decayed banana peels.',
                'Wood ash also has high potassium content but must be used cautiously due to its effect on pH level.',
                'Adequate moisture is necessary for effective potassium uptake',
                'low soil water reduces K uptake by plant roots.',
                'Liming acidic soils can increase potassium retention in some soils by reducing leaching',
                'practices that increase soil organic matter can also increase potassium retention.',
              ],
            },
            {
              InorganicMethod: [
                'Use The most widely used potassium fertilizer is potassium chloride.',
                'Other inorganic potassium fertilizers include potassium nitrate, potassium sulfate, and monopotassium phosphate.',
              ],
            },
          ],
        },
        {
          Phosphorus: [
            {
              OrganicMethod: [
                'Major organic sources of phosphorus include, again, certain manures, as well as bone meal and pulverized rock phosphate.',
                'Manures contain some potassium as well as nitrogen and phosphorous some richer sources of potassium include seaweed, wood ashes, and the minerals greensand and granite.',
                'Some commercially available organic fertilizers are blends of one or more individual organic fertilizers, so can offer a balance of all three major nutrients.',
              ],
              InorganicMethod: [''],
            },
          ],
        },
        {
          OrganicCarbon: [
            'Eliminate unnecessary cultivation (introduce zero or minimum tillage)',
            'Include pasture rotations where possible and use pastures in the inter-rows for tree crops and vines. Plant perennial species where possible',
            'Adopt appropriate grazing management strategies that minimise the impact of grazing on soil structure and maximise organic matter returns',
            'Maintain and conserve ground cover - To maximise wind erosion control, stubble should cover a minimum of 70% of the soil surface, preferably be standing (anchored by roots)',
            'Grow high yield, high biomass crops and pastures, and in continuous cropping systems maximise crop frequency to increase organic matter returns to the soil',
            'Maintain soil fertility with inorganic and organic fertilisers to maximise production',
            'If available locally, import manure/compost or other organic amendments',
          ],
        },
        {
          pH: {
            Acidic: 'The most common way to raise the pH of the soil is to add pulverized limestone to the soil. Limestone acts as a soil acid neutralizer and consists of either calcium and magnesium carbonate or calcium carbonate. These are called dolomitic limestone and calcitic limestone respectively.',
            Alkaline: 'Elemental sulfur, aluminium sulfate, iron sulfate, and ammonium sulfate are common amendments used to decrease the soil pH.Spaghnum peat moss is often suggested as a soil amendment to decrease soil pH.  However, most peat moss found in garden centres is neutral or slightly acidic.  Only Canadian spaghnum peat moss has a low pH of 3.0 to 4.5 and will effectively reduce soil pH',
          },
        },
      ],
      causes: [
        {
          Nitrogen: [
            {
              ImbalanceIsCausedBy: 'The fluctuations in nitrogen levels in soil is because of excess usage of both synthetic and organic Nitrogen fertilizers. In rural areas septic tanks contribute a major part in these fluctuations.',
            },
            {
              ImbalanceCauses: 'Ground and drinking water pollution. The toxicated water causes respiratory,fertility, kidney problems. Improper growth in infants.',
            },
          ],
        },
        {
          Potassium: [
            {
              ImbalanceIsCausedBy: 'Insufﬁcient fertilization, excessive ‘table salt’ (sodium) in the root environment, unfavourable soil structure (e.g. sandy soils) and formation of depletion zones around roots.',
            },
            {
              ImbalanceCauses: 'Chlorosis, poor growth, reduced yield and poor ﬁbre quality with the increased susceptibility to diseases and pests,effect on photosynthesis,purple or rust brown spots. Leaves often turn or curl radially on the top and entire leaves become necrotic and eventually fall off. Inhibition of flowering and rapid shedding of leaves.',
            },
          ],
        },
        {
          Phosphorus: [
            {
              ImbalanceIsCausedBy: 'Excessive mining, out of which only 10% enters the agriculture system and is utilised by plants. The remaining 90% is lost because of erosion especially on heavy textured soil.',
            },
            {
              ImbalanceCauses: 'Excess phosphorus flows with rain water runoff causing widespread pollution in lakes, rivers and coastal areas, algal blooms and dead zones in the oceans killing aquatic life and producing toxins harmful to humans.',
            },
          ],
        },
        {
          OrganicCarbon: [
            {
              ImbalanceIsCausedBy: 'Anaerobic (in the absence of oxygen)rotting of organic matter during flood irrigation. Decaying or burning biomass and adding manure. Livestock emissions and waste.',
            },
            {
              ImbalanceCauses: 'Greenhouse gases emissions.Around 40% of methane in the global GHG emissions is contributed from agriculture.',
            },
          ],
        },
        {
          pH: {
            Acidic: [
              {
                ImbalanceIsCausedBy: 'Soil acidification is a natural process accelerated by agriculture. Ammonium based fertilisers are major contributors to soil acidification.The main cause of soil acidification is inefficient use of nitrogen, followed by the export of alkalinity in produce.',
              },
              {
                ImbalanceCauses: 'Decreases availability of nutrients to plants. Acidity can degrade the favorable environment for bacteria,earthworm and other soil organisms.',
              },
            ],
            Alkaline: [
              {
                ImbalanceIsCausedBy: 'Excess carbonates cause alkalinity in soil. Alkaline irrigation waters may cause soil alkalinity. Continuous use of irrigation water with salt content and use of basic fertilizer Calcium Ammonium Nitrate and excessive overlimiting practice regardless the soil pH.',
              },
              {
                ImbalanceCauses: 'Reduction in availability of nutrients like iron,zinc,copper etc. Iron chlorosis,precipitation.',
              },
            ],
          },
        },
      ],
    };
    this.changeState = this.changeState.bind (this);
    this.changeDistrict = this.changeDistrict.bind (this);
  }

  componentDidMount () {
    this.setState ({
      states: [
        {
          name: 'Kerala',
          districts: [
            {
              name: 'Alappuzha',
              nutrients: [
                'N : 0.00%',
                'OC : 0.00%',
                'P : 0.00%',
                'K : 100.00%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Ernakulam',
              nutrients: [
                'N : 97.67%',
                'OC : 34.30%',
                'P : 27.03%',
                'K : 32.34%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Idukki',
              nutrients: ['N : 0%', 'OC : 11.76%', 'P : 41.18%', 'K : 16.00%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Kannur',
              nutrients: [
                'N : 100.00%',
                'OC : 22.47%',
                'P : 42.59%',
                'K : 34.66%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Kasaragod',
              nutrients: [
                'N : 92.86%',
                'OC : 4.67%',
                'P : 64.31%',
                'K : 61.69%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Kollam',
              nutrients: ['N:0%', 'OC:12.50%', 'P:12.50%', 'K:75.00%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Kottayam',
              nutrients: ['N:97.67%', 'OC:9.18%', 'P:49.56%', 'K:24.51%'],
              pH: 'Highly, Moderately acidic',
            },
            {
              name: 'Kozhikode',
              nutrients: ['N:0%', 'OC:100.00%', 'P:0%', 'K:0%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Malappuram',
              nutrients: ['N:100.00%', 'OC:22.08%', 'P:43.68%', 'K:24.87%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Palakkad',
              nutrients: ['N:100.00%', 'OC:12.55%', 'P:3.70%', 'K:31.37%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Pathanamthitta',
              nutrients: ['N:100.00%', 'OC:2.70%', 'P:16.44%', 'K:29.33%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Thiruvananthapuram',
              nutrients: ['N:100.00%', 'OC:33.70%', 'P:29.61%', 'K:38.20%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Thissur',
              nutrients: ['N:100.00%', 'OC:17.38%', 'P:28.97%', 'K:25.08%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Wayanad',
              nutrients: ['N:0%', 'OC:17.59%', 'P:78.28%', 'K:28.06%'],
              pH: 'Highly acidic',
            },
          ],
        },
        {
          name: 'Manipur',
          districts: [
            {
              name: 'Bishnupur',
              nutrients: ['N:100.00%', 'OC:0%', 'P:85.71%', 'K:100.00%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chandel',
              nutrients: ['N:0%', 'OC:0%', 'P:100.00%', 'K:100.00%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Churachandpur',
              nutrients: ['N:13.51%', 'OC:2.70%', 'P:64.86%', 'K:75.68%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Imphal East',
              nutrients: ['N:28.78%', 'OC:5.07%', 'P:43.05%', 'K:59.63%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Imphal West',
              nutrients: ['N:32.49%', 'OC:4.26%', 'P:30.24%', 'K:37.21%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Senapati',
              nutrients: ['N:0%', 'OC:0%', 'P:0%', 'K:0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Tamenglong',
              nutrients: ['N:100.00%', 'OC:58.62%', 'P:17.24%', 'K:100.00%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Thoubal',
              nutrients: ['N:0%', 'OC:0%', 'P:0%', 'K:100.00%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ukhrul',
              nutrients: ['N:0%', 'OC:0%', 'P:38.26%', 'K:15.65%'],
              pH: 'Moderately alkaline',
            },
          ],
        },
        {
          name: 'Meghalaya',
          districts: [
            {
              name: 'East Garo Hills',
              nutrients: ['N:100.00%', 'OC:10.60%', 'P:94.41%', 'K:57.18%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'East Jaintia Hills',
              nutrients: ['N:100.00%', 'OC:9.83%', 'P:87.66%', 'K:60.54%'],
              pH: 'Highly acidic',
            },
            {
              name: 'East Khasi Hills',
              nutrients: ['N:0%', 'OC:3.71%', 'P:39.51%', 'K:26.67%'],
              pH: 'Highly acidic',
            },
            {
              name: 'North Garo Hills',
              nutrients: ['N:0%', 'OC:26.55%', 'P:84.79%', 'K:56.72%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Ri Bhoi',
              nutrients: ['N:88.89%', 'OC:3.64%', 'P:72.77%', 'K:54.99%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'South Garo Hills',
              nutrients: ['N:100.00%', 'OC:11.10%', 'P:94.40%', 'K:94.50%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'South West Garo Hills',
              nutrients: ['N:100.00%', 'OC:13.92%', 'P:96.51%', 'K:81.95%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'South west Khasi Hills',
              nutrients: ['N:80.00%', 'OC:1.00%', 'P:66.08%', 'K:83.55%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'West Garo Hills',
              nutrients: ['N:0%', 'OC:7.44%', 'P:100.00%', 'K:87.45%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'West Jaintia Hils',
              nutrients: ['N:0%', 'OC:57.75%', 'P:58.15%', 'K:25.45%'],
              pH: 'Highly acidic',
            },
            {
              name: 'West Khasi Hills',
              nutrients: ['N:100.00%', 'OC:1.85%', 'P:73.63%', 'K:49.81%'],
              pH: 'Moderately acidic',
            },
          ],
        },
        {
          name: 'Puducherry',
          districts: [
            {
              name: 'Karaikal',
              nutrients: ['N:100.00%', 'OC:0%', 'P:52.11%', 'K:50.83%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mahe',
              nutrients: ['N:96.69%', 'OC:0%', 'P:99.10%', 'K:4.21%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Pondicherry',
              nutrients: ['N:99.58%', 'OC:0%', 'P:99.37%', 'K:6.28%'],
              pH: 'Moderately alkaline',
            },
          ],
        },

        {
          name: 'Tripura',
          districts: [
            {
              name: 'Dhalai',
              nutrients: ['N:40.46%', 'OC:23.38%', 'P:40.49%', 'K:51.99%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Gomati',
              nutrients: ['N:54.42%', 'OC:42.01%', 'P:64.38%', 'K:92.72%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Khowai',
              nutrients: ['N:15.39%', 'OC:18.72%', 'P:51.77%', 'K:87.15%'],
              pH: 'Highly acidic',
            },
            {
              name: 'North Tripura',
              nutrients: ['N:59.67%', 'OC:40.32%', 'P:46.77%', 'K:77.42%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Sepahijala',
              nutrients: ['N:54.73%', 'OC:25.40%', 'P:44.64%', 'K:62.67%'],
              pH: 'Highly acidic',
            },
            {
              name: 'South Tripura',
              nutrients: ['N:50.00%', 'OC:16.37%', 'P:58.62%', 'K:82.06%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Unakoti',
              nutrients: ['N:5.88%', 'OC:13.70%', 'P:55.08%', 'K:88.29%'],
              pH: 'Highly acidic',
            },
            {
              name: 'West Tripura',
              nutrients: ['N:100.00%', 'OC:0%', 'P:100.00%', 'K:0%'],
              pH: 'Highly acidic',
            },
          ],
        },
        {
          name: 'Uttarakhand',
          districts: [
            {
              name: 'Almora',
              nutrients: ['N:0%', 'OC:0%', 'P:0%', 'K:0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bageshwar',
              nutrients: ['N:100.00%', 'OC:21.00%', 'P:27.99%', 'K:25.30%'],
              pH: 'Slightly acidic',
            },
            {
              name: 'Chamoli',
              nutrients: ['N:100.00%', 'OC:10.26%', 'P:6.60%', 'K:14.19%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Champawat',
              nutrients: ['N:0%', 'OC:5.22%', 'P:16.74%', 'K:12.20%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Dehradun',
              nutrients: ['N:34.34%', 'OC:5.42%', 'P:7.35%', 'K:29.10%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Haridwar',
              nutrients: ['N:98.49%', 'OC:48.43%', 'P:12.32%', 'K:32.70%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Nainital',
              nutrients: ['N:99.98%', 'OC:11.66%', 'P:34.41%', 'K:32.17%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Pauri Garhwal',
              nutrients: [
                'N : 56.86%',
                'OC : 14.01%',
                'P : 4.78%',
                'K : 7.41%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Pithoragarh',
              nutrients: [
                'N : 100.00%',
                'OC : 22.69%',
                'P : 17.88%',
                'K : 17.65%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rudra Prayag',
              nutrients: [
                'N : 100.00%',
                'OC : 0.31%',
                'P : 0.31%',
                'K : 24.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Tehri Garhwal',
              nutrients: ['N:96.67%', 'OC:20.33%', 'P:27.08%', 'K:20.96%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Udam Singh Nagar',
              nutrients: ['N:99.38%', 'OC:70.30%', 'P:60.08%', 'K:48.28%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Uttar Kashi',
              nutrients: ['N:78.31%', 'OC:5.54%', 'P:5.54%', 'K:27.79%'],
              pH: 'Slightly acidic',
            },
          ],
        },
        {
          name: 'West Bengal',
          districts: [
            {
              name: '24 Paraganas North',
              nutrients: ['N:59.60%', 'OC:59.59%', 'P:0%', 'K:6.06%'],
              pH: 'Moderately alkaline',
            },
            {
              name: '24 Paraganas South',
              nutrients: ['N:27.52%', 'OC:25.47%', 'P:6.60%', 'K:21.37%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Alipurduar',
              nutrients: ['N:78.26%', 'OC:27.91%', 'P:3.53%', 'K:46.51%'],
              pH: '',
            },
            {
              name: 'Bankura',
              nutrients: ['N:17.79%', 'OC:16.91%', 'P:1.06%', 'K:5.46%'],
              pH: '',
            },
            {
              name: 'Bardhaman',
              nutrients: ['N:36.93%', 'OC:20.89%', 'P:14.73%', 'K:47.93%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Birbhum',
              nutrients: ['N:27.87%', 'OC:15.01%', 'P:7.21%', 'K:36.85%'],
              pH: '',
            },
            {
              name: 'Coochbehar',
              nutrients: ['N:55.42%', 'OC:33.93%', 'P:2.38%', 'K:52.98%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Darjelling',
              nutrients: ['N:100.00%', 'OC:0%', 'P:0%', 'K:26.47%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Dinajpur Dakshin',
              nutrients: ['N:16.98%', 'OC:15.10%', 'P:5.66%', 'K:0%'],
              pH: '',
            },
            {
              name: 'Dinajpur Uttar',
              nutrients: ['N:100.00%', 'OC:0%', 'P:0%', 'K:25.00%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Hooghly',
              nutrients: ['N:33.71%', 'OC:26.88%', 'P:0.65%', 'K:1.20%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Howrah',
              nutrients: ['N:14.66%', 'OC:26.66%', 'P:73.33%', 'K:5.33%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Jalpaiguri',
              nutrients: ['N:78.08%', 'OC:18.55%', 'P:5.28%', 'K:37.64%'],
              pH: 'Highly acidic',
            },
            {
              name: 'KALIMPONG',
              nutrients: ['N:0%', 'OC:0%', 'P:0%', 'K:100.00%'],
              pH: '',
            },
            {
              name: 'Maldah',
              nutrients: ['N:27.27%', 'OC:9.09%', 'P:36.36%', 'K:100.00%'],
              pH: 'Moderately alkaline, Slightly acidic',
            },
            {
              name: 'Medinipur East',
              nutrients: ['N:100.00%', 'OC:100.00%', 'P:0%', 'K:33.33%'],
              pH: ' ',
            },
            {
              name: 'Medinipur West',
              nutrients: ['N:95.26%', 'OC:36.05%', 'P:4.24%', 'K:3.91%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Murshidabad',
              nutrients: ['N:16.28%', 'OC:39.48%', 'P:0.62%', 'K:21.20%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Nadia',
              nutrients: ['N:50.00%', 'OC:35.87%', 'P:28.26%', 'K:97.82%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Purulia',
              nutrients: ['N:50.27%', 'OC:50.29%', 'P:11.25%', 'K:2.59%'],
              pH: 'Moderately acidic',
            },
          ],
        },

        {
          name: 'Himachal Pradesh',
          districts: [
            {
              name: 'Bilaspur',
              nutrients: ['N:15.36%', 'OC:15.93%', 'P:16.03%', 'K:7.10%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chamba',
              nutrients: ['N:22.02%', 'OC:0%', 'P:7.19%', 'K:4.16%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Hamirpur',
              nutrients: ['N:45.61%', 'OC:40.35%', 'P:14.04%', 'K:0%'],
              pH: 'Slightly acidic',
            },
            {
              name: 'Kangra',
              nutrients: ['N:9.73%', 'OC:10.70%', 'P:13.68%', 'K:8.11%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Kinnaur',
              nutrients: ['N:61.52%', 'OC:4.50%', 'P:4.95%', 'K:2.95%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kullu',
              nutrients: ['N:86.76%', 'OC:4.40%', 'P:%17.02', 'K:19.31%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Lahul and Spiti',
              nutrients: ['N:92.86%', 'OC:0%', 'P:0%', 'K:3.06%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mandi',
              nutrients: ['N:83.55%', 'OC:2.28%', 'P:7.78%', 'K:4.51%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Shimla',
              nutrients: ['N:69.15%', 'OC:11.02%', 'P:37.42%', 'K:17.66%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Sirmaur',
              nutrients: ['N:36.19%', 'OC:3.77%', 'P:4.03%', 'K:0.92%'],
              pH: 'Slightly acidic',
            },
            {
              name: 'Solan',
              nutrients: ['N:21.31%', 'OC:7.06%', 'P:6.26%', 'K:3.98%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Una',
              nutrients: ['N:34.23%', 'OC:11.33%', 'P:21.48%', 'K:26.57%'],
              pH: 'Moderately alkaline',
            },
          ],
        },
        {
          name: 'Haryana',
          districts: [
            {
              name: 'Ambala',
              nutrients: ['N:0%', 'OC:100.00%', 'P:11.08%', 'K:61.85%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bhiwani',
              nutrients: ['N:99.99%', 'OC:98.30%', 'P:80.63%', 'K:53.60%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Faridabad',
              nutrients: ['N:99.90%', 'OC:99.88%', 'P:99.93%', 'K:1.95%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Fatehabad',
              nutrients: ['N:99.76%', 'OC:92.82%', 'P:79.31%', 'K:50.85%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Gurgaon',
              nutrients: ['N:97.71%', 'OC:95.04%', 'P:75.81%', 'K:56.48%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Hisar',
              nutrients: ['N:100.00%', 'OC:96.14%', 'P:75.76%', 'K:10.49%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jhajjar',
              nutrients: ['N:50.00%', 'OC:100.00%', 'P:56.09%', 'K:29.80%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jind',
              nutrients: ['N:100.00%', 'OC:99.81%', 'P:75.56%', 'K:28.02%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kaithal',
              nutrients: ['N:0%', 'OC:98.42%', 'P:86.58%', 'K:24.21%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Karnal',
              nutrients: ['N:100.00%', 'OC:96.06%', 'P:91.67%', 'K:54.47%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kurukshetra',
              nutrients: ['N:99.18%', 'OC:92.66%', 'P:96.30%', 'K:42.87%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mahendragarh',
              nutrients: ['N:99.85%', 'OC:72.37%', 'P:98.30%', 'K:48.76%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mewat',
              nutrients: ['N:99.92%', 'OC:99.11%', 'P:81.18%', 'K:31.51%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Palwal',
              nutrients: ['N:100.00%', 'OC:100.00%', 'P:34.49%', 'K:74.13%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Panchkula',
              nutrients: ['N:96.97%', 'OC:94.57%', 'P:36.64%', 'K:65.18%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Panipat',
              nutrients: ['N:100.00%', 'OC:77.67%', 'P:65.15%', 'K:45.75%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rewari',
              nutrients: ['N:100.00%', 'OC:96.43%', 'P:91.82%', 'K:74.57%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rohtak',
              nutrients: ['N:0%', 'OC:91.64%', 'P:99.80%', 'K:2.81%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sirsa',
              nutrients: ['N:99.90%', 'OC:99.21%', 'P:88.25%', 'K:22.30%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sonipat',
              nutrients: ['N:0%', 'OC:94.24%', 'P:99.38%', 'K:6.3%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Yamunanagar',
              nutrients: ['N:100.00%', 'OC:98.05%', 'P:81.12%', 'K:74.28%'],
              pH: 'Moderately alkaline',
            },
          ],
        },

        {
          name: 'Gujarat',
          districts: [
            {
              name: 'Ahmadabad',
              nutrients: ['N:75.30%', 'OC:59.05%', 'P:11.91%', 'K:0.85%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Amreli',
              nutrients: ['N:99.74%', 'OC:33.8%', 'P:18.54%', 'K:9.80%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Anand',
              nutrients: ['N:100.00%', 'OC:0%', 'P:0%', 'K:0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Aravalli',
              nutrients: ['N:73.75%', 'OC:34.00%', 'P:6.01%', 'K:13.67%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Banas Kantha',
              nutrients: ['N:76.44%', 'OC:27.12%', 'P:1.00%', 'K:29.88%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bharuch',
              nutrients: ['N:47.49%', 'OC:9.89%', 'P:5.56%', 'K:2.26%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bhavnagar',
              nutrients: ['N:55.73%', 'OC:22.29%', 'P:42.45%', 'K:2.40%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Botad',
              nutrients: ['N:10.00%', 'OC:41.04%', 'P:18.13%', 'K:5.04%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chhotaudepur',
              nutrients: ['N:98.48%', 'OC:47.91%', 'P:28.38%', 'K:8.29%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dang',
              nutrients: ['N:98.77%', 'OC:51.89%', 'P:7.32%', 'K:13.31%'],
              pH: 'Slightly acidic',
            },
            {
              name: 'Devbhumidwarka',
              nutrients: ['N:99.96%', 'OC:16.26%', 'P:2.03%', 'K:14.94%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dohad',
              nutrients: ['N:99.74%', 'OC:39.71%', 'P:29.63%', 'K:26.43%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Gandhinagar',
              nutrients: ['N:99.99%', 'OC:39.07%', 'P:22.10%', 'K:8.62%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Girsomnath',
              nutrients: ['N:77.21%', 'OC:2.08%', 'P:6.51%', 'K:18.23%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jamnagar',
              nutrients: ['N:0%', 'OC:33.33%', 'P:0%', 'K:0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Junagadh',
              nutrients: ['N:99.78%', 'OC:44.02%', 'P:12.76%', 'K:5.57%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kachchh',
              nutrients: ['N:100.00%', 'OC:68.21%', 'P:11.29%', 'K:8.13%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kheda',
              nutrients: ['N:72.16%', 'OC:52.71%', 'P:13.54%', 'K:0.22%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mahesana',
              nutrients: ['N:59.61%', 'OC:10.25%', 'P:2.10%', 'K:8.44%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mahisagar',
              nutrients: ['N:100.00%', 'OC:36.41%', 'P:15.58%', 'K:2.35%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Morbi',
              nutrients: ['N:99.98%', 'OC:41.78%', 'P:19.65%', 'K:5.68%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Narmada',
              nutrients: ['N:99.99%', 'OC:52.87%', 'P:12.19%', 'K:3.53%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Navsari',
              nutrients: ['N:35.58%', 'OC:0.73%', 'P:0%', 'K:0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Panch Mahals',
              nutrients: ['N:99.99%', 'OC:20.78%', 'P:15.68%', 'K:17.30%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Patan',
              nutrients: ['N:87.52%', 'OC:27.62%', 'P:55.49%', 'K:4.26%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Porbandar',
              nutrients: ['N:99.99%', 'OC:57.37%', 'P:10.44%', 'K:1.22%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rajkot',
              nutrients: ['N:69.38%', 'OC:38.01%', 'P:41.27%', 'K:3.97%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sabar Kantha',
              nutrients: ['N:99.98%', 'OC:35.58%', 'P:25.70%', 'K:17.94%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Surat',
              nutrients: ['N:99.50%', 'OC:47.17%', 'P:18.69%', 'K:6.09%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Surendranagar',
              nutrients: ['N:99.78%', 'OC:46.36%', 'P:39.00%', 'K:7.24%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Tapi',
              nutrients: ['N:92.11%', 'OC:37.00%', 'P:19.04%', 'K:0.08%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Vadodara',
              nutrients: ['N:79.59%', 'OC:52.65%', 'P:16.72%', 'K:0.30%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Valsad',
              nutrients: ['N:96.56%', 'OC:55.48%', 'P:25.29%', 'K:3.26%'],
              pH: 'Moderately alkaline',
            },
          ],
        },
        {
          name: 'Assam',
          districts: [
            {
              name: 'Baksa',
              nutrients: ['N:31.27%', 'OC:25.69%', 'P:90.55%', 'K:99.96%'],
              pH: '',
            },
            {
              name: 'Barpeta',
              nutrients: ['N:82.00%', 'OC:59.04%', 'P:62.42%', 'K:90.22%'],
              pH: '',
            },
            {
              name: 'Biswanath',
              nutrients: ['N:0%', 'OC:0%', 'P:100.00%', 'K:90.22%'],
              pH: '',
            },
            {
              name: 'Bongaigaon',
              nutrients: ['N:96.18%', 'OC:78.42%', 'P:93.63%', 'K:99.55%'],
              pH: '',
            },
            {
              name: 'Cachar',
              nutrients: ['N:0.89%', 'OC:2.40%', 'P:56.50%', 'K:74.86%'],
              pH: '',
            },
            {
              name: 'Charaideo',
              nutrients: ['N:94.46%', 'OC:77.70%', 'P:92.39%', 'K:100.00%'],
              pH: '',
            },
            {
              name: 'Chirang',
              nutrients: ['N:80.90%', 'OC:37.67%', 'P:95.15%', 'K:76.17%'],
              pH: '',
            },
            {
              name: 'Darrang',
              nutrients: ['N:91.73%', 'OC:78.67%', 'P:95.44%', 'K:79.36%'],
              pH: '',
            },
            {
              name: 'Dhemaji',
              nutrients: ['N:89.83%', 'OC:66.67%', 'P:65.08%', 'K:5.56%'],
              pH: '',
            },
            {
              name: 'Dhubri',
              nutrients: ['N:0.26%', 'OC:1.19%', 'P:18.65%', 'K:78.11%'],
              pH: '',
            },
            {
              name: 'Dibrugarh',
              nutrients: ['N:84.13%', 'OC:72.99%', 'P:81.57%', 'K:95.02%'],
              pH: '',
            },
            {
              name: 'Dima Hasao',
              nutrients: ['N:0%', 'OC:100.00%', 'P:100.00%', 'K:100.00%'],
              pH: '',
            },
            {
              name: 'Goalpara',
              nutrients: ['N:5.12%', 'OC:5.62%', 'P:72.66%', 'K:66.57%'],
              pH: '',
            },
            {
              name: 'Golaghat',
              nutrients: ['N:0%', 'OC:0%', 'P:100%', 'K:0%'],
              pH: '',
            },
            {
              name: 'Hailakandi',
              nutrients: ['N:0.34%', 'OC:1.27%', 'P:94.39%', 'K:77.36%'],
              pH: '',
            },
            {
              name: 'HOJAI',
              nutrients: ['N:91.50%', 'OC:38.46%', 'P:57.69%', 'K:89.10%'],
              pH: '',
            },
            {
              name: 'Jorhat',
              nutrients: ['N:0%', 'OC:0%', 'P:99.90%', 'K:11.81%'],
              pH: '',
            },
            {
              name: 'Kamrup',
              nutrients: ['N:4.12%', 'OC:5.12%', 'P:72.62%', 'K:85.60%'],
              pH: '',
            },
            {
              name: 'Kamrup Metro',
              nutrients: ['N:0.12%', 'OC:4.11%', 'P:98.87%', 'K:55.95%'],
              pH: '',
            },
            {
              name: 'Karbi Anglong',
              nutrients: ['N:87.37%', 'OC:55.81%', 'P:65.79%', 'K:7.29%'],
              pH: '',
            },
            {
              name: 'Karimganj',
              nutrients: ['N:0.18%', 'OC:2.17%', 'P:71.98%', 'K:52.53%'],
              pH: '',
            },
            {
              name: 'Kokrajhar',
              nutrients: ['N:91.16%', 'OC:83.02%', 'P:90.54%', 'K:97.67%'],
              pH: '',
            },
            {
              name: 'Lakhimpur',
              nutrients: ['N:91.47%', 'OC:57.44%', 'P:79.52%', 'K:61.30%'],
              pH: '',
            },
            {
              name: 'Majuli',
              nutrients: ['N:2.68%', 'OC:7.38%', 'P:71.81%', 'K:76.18%'],
              pH: '',
            },
            {
              name: 'Marigaon',
              nutrients: ['N:0.68%', 'OC:1.54%', 'P:48.49%', 'K:66.42%'],
              pH: '',
            },
            {
              name: 'Nagaon',
              nutrients: ['N:96.30%', 'OC:75.00%', 'P:94.89%', 'K:99.55%'],
              pH: '',
            },
            {
              name: 'Nalbari',
              nutrients: ['N:93.70%', 'OC:69.69%', 'P:71.94%', 'K:86.86%'],
              pH: '',
            },
            {
              name: 'Sivasagar',
              nutrients: ['N:0%', 'OC:0%', 'P:100.00%', 'K:100.00%'],
              pH: '',
            },
            {
              name: 'Sonitpur',
              nutrients: ['N:40.00%', 'OC:40.00%', 'P:100.00%', 'K:100.00%'],
              pH: '',
            },
            {
              name: 'SOUTH SALMARA MANCACHAR',
              nutrients: ['N:3.95%', 'OC:12.09%', 'P:89.42%', 'K:47.20%'],
              pH: '',
            },
            {
              name: 'Tinsukia',
              nutrients: ['N:72.93%', 'OC:38.39%', 'P:97.52%', 'K:98.58%'],
              pH: '',
            },
            {
              name: 'Udalguri',
              nutrients: ['N : 0.28%', 'OC : 0.75%', 'P : 5.85%', 'K : 67.97%'],
              pH: '',
            },
          ],
        },

        {
          name: 'Andhra Pradesh',
          districts: [
            {
              name: 'Anantapur',
              nutrients: [
                'N : 100.00%',
                'OC : 50.00%',
                'P : 0.00%',
                'K : 0.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chittoor',
              nutrients: [
                'N : 96.23%',
                'OC : 36.68%',
                'P : 11.63%',
                'K : 49.93%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'East Godavari',
              nutrients: [
                'N : 70.95%',
                'OC : 48.12%',
                'P : 24.45%',
                'K : 2.42%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Guntur',
              nutrients: [
                'N : 72.34%',
                'OC : 74.47%',
                'P : 8.51%',
                'K : 0.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Krishna',
              nutrients: [
                'N : 63.70%',
                'OC : 58.32%',
                'P : 1.36%',
                'K : 10.39%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kurnool',
              nutrients: [
                'N : 98.18%',
                'OC : 62.39%',
                'P : 7.29%',
                'K : 3.66%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Prakasam',
              nutrients: [
                'N : 93.43%',
                'OC : 52.37%',
                'P : 24.88%',
                'K : 16.77%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Spsr Nellore',
              nutrients: [
                'N : 97.12%',
                'OC : 59.94%',
                'P : 11.75%',
                'K : 45.01%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Srikakulam',
              nutrients: [
                'N : 88.52%',
                'OC : 29.53%',
                'P : 42.62%',
                'K : 23.91%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Vishakhapatnam',
              nutrients: [
                'N : 88.98%',
                'OC : 22.07%',
                'P : 14.41%',
                'K : 51.42%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Vizianagaram',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 0.00%',
                'K : 0.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'West Godavari',
              nutrients: [
                'N : 87.25%',
                'OC : 33.02%',
                'P : 3.41%',
                'K : 56.53%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Y.S.R.',
              nutrients: [
                'N : 98.59%',
                'OC : 63.67%',
                'P : 19.79%',
                'K : 28.43%',
              ],
              pH: 'Moderately alkaline',
            },
          ],
        },
        {
          name: 'Chhattisgarh',
          districts: [
            {
              name: 'Balod',
              nutrients: [
                'N : 84.05%',
                'OC : 42.17%',
                'P : 20.75%',
                'K : 6.73%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Baloda Bazar',
              nutrients: [
                'N : 91.67%',
                'OC : 20.84%',
                'P : 29.17%',
                'K : 4.17%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Balrampur',
              nutrients: [
                'N : 81.84%',
                'OC : 58.93%',
                'P : 12.11%',
                'K : 21.37%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Bastar',
              nutrients: [
                'N : 30.33%',
                'OC : 11.18%',
                'P : 13.45%',
                'K : 21.03%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Bemetara',
              nutrients: ['N : 86.28%', 'OC : 4.51%', 'P : 4.34%', 'K : 1.04%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bijapur',
              nutrients: [
                'N : 14.05%',
                'OC : 3.79%',
                'P : 0.82%',
                'K : 24.45%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Bilaspur',
              nutrients: [
                'N : 76.04%',
                'OC : 57.47%',
                'P : 21.37%',
                'K : 0.31%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Dantewada',
              nutrients: [
                'N : 61.02%',
                'OC : 55.48%',
                'P : 36.46%',
                'K : 26.94%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Dhamtari',
              nutrients: [
                'N : 91.76%',
                'OC : 67.86%',
                'P : 34.63%',
                'K : 8.69%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Durg',
              nutrients: ['N : 21.18%', 'OC : 4.27%', 'P : 6.83%', 'K : 7.68%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Gariyaband',
              nutrients: [
                'N : 91.52%',
                'OC : 91.52%',
                'P : 30.41%',
                'K : 0.00%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Janjgir-Champa',
              nutrients: [
                'N : 84.36%',
                'OC : 60.49%',
                'P : 18.69%',
                'K : 3.05%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Jashpur',
              nutrients: [
                'N : 71.34%',
                'OC : 42.48%',
                'P : 40.53%',
                'K : 39.44%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Kabirdham',
              nutrients: [
                'N : 72.60%',
                'OC : 51.14%',
                'P : 86.30%',
                'K : 4.71%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kanker',
              nutrients: [
                'N : 38.55%',
                'OC : 59.58%',
                'P : 43.48%',
                'K : 39.10%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Kondagaon',
              nutrients: [
                'N : 76.67%',
                'OC : 50.69%',
                'P : 19.50%',
                'K : 31.27%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Korba',
              nutrients: [
                'N : 63.67%',
                'OC : 43.90%',
                'P : 28.71%',
                'K : 22.96%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Korea',
              nutrients: [
                'N : 92.04%',
                'OC : 84.34%',
                'P : 25.97%',
                'K : 23.80%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Mahasamund',
              nutrients: [
                'N : 65.86%',
                'OC : 52.37%',
                'P : 18.53%',
                'K : 20.85%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Mungeli',
              nutrients: [
                'N : 42.19%',
                'OC : 39.40%',
                'P : 58.22%',
                'K : 0.10%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Narayanpur',
              nutrients: [
                'N : 96.61%',
                'OC : 58.87%',
                'P : 1.05%',
                'K : 18.00%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Raigarh',
              nutrients: [
                'N : 93.01%',
                'OC : 96.31%',
                'P : 53.37%',
                'K : 0.00%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Raipur',
              nutrients: [
                'N : 82.36%',
                'OC : 56.89%',
                'P : 38.13%',
                'K : 15.20%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Rajnandgaon',
              nutrients: [
                'N : 84.51%',
                'OC : 71.83%',
                'P : 39.44%',
                'K : 0.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sukma',
              nutrients: [
                'N : 72.82%',
                'OC : 42.48%',
                'P : 13.90%',
                'K : 48.77%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Surajpur',
              nutrients: [
                'N : 100.00%',
                'OC : 50.00%',
                'P : 0.00%',
                'K : 0.00%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Surguja',
              nutrients: [
                'N : 88.89%',
                'OC : 0.00%',
                'P : 0.00%',
                'K : 11.11%',
              ],
              pH: 'Moderately acidic',
            },
          ],
        },
        {
          name: 'Goa',
          districts: [
            {
              name: 'North Goa',
              nutrients: [
                'N : 47.47%',
                'OC : 31.81%',
                'P : 66.40%',
                'K : 31.71%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'South Goa',
              nutrients: [
                'N : 21.77%',
                'OC : 9.43%',
                'P : 76.46%',
                'K : 52.21%',
              ],
              pH: 'Moderately acidic',
            },
          ],
        },
        {
          name: 'Jammu and Kashmir',
          districts: [
            {
              name: 'Anantnag',
              nutrients: [
                'N : 0.00%',
                'OC : 0.00%',
                'P : 100.00%',
                'K : 50.00%',
              ],
              pH: 'Slightly acidic',
            },
            {
              name: 'Badgam',
              nutrients: [
                'N : 28.67%',
                'OC : 5.78%',
                'P : 37.94%',
                'K : 9.97%',
              ],
              pH: 'Slightly acidic',
            },
            {
              name: 'Bandipora',
              nutrients: [
                'N : 100.00%',
                'OC : 19.72%',
                'P : 1.42%',
                'K : 1.63%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Baramulla',
              nutrients: [
                'N : 21.82%',
                'OC : 5.32%',
                'P : 16.58%',
                'K : 24.37%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Doda',
              nutrients: [
                'N : 27.50%',
                'OC : 34.17%',
                'P : 71.67%',
                'K : 25.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ganderbal',
              nutrients: ['N : 0.61%', 'OC : 1.95%', 'P : 56.95%', 'K : 3.05%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jammu',
              nutrients: [
                'N : 58.36%',
                'OC : 66.80%',
                'P : 75.90%',
                'K : 21.68%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kathua',
              nutrients: [
                'N : 14.03%',
                'OC : 15.47%',
                'P : 70.86%',
                'K : 58.27%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kishtwar',
              nutrients: [
                'N : 14.47%',
                'OC : 7.89%',
                'P : 52.63%',
                'K : 6.58%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kulgam',
              nutrients: [
                'N : 33.12%',
                'OC : 14.23%',
                'P : 49.12%',
                'K : 38.91%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Kupwara',
              nutrients: [
                'N : 37.92%',
                'OC : 4.52%',
                'P : 94.09%',
                'K : 13.74%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Poonch',
              nutrients: [
                'N : 34.92%',
                'OC : 26.99%',
                'P : 22.22%',
                'K : 15.87%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Pulwana',
              nutrients: [
                'N : 19.45%',
                'OC : 11.50%',
                'P : 8.05%',
                'K : 32.19%',
              ],
              pH: 'Slightly acidic',
            },
            {
              name: 'Rajauri',
              nutrients: [
                'N : 57.51%',
                'OC : 61.44%',
                'P : 86.27%',
                'K : 6.54%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ramban',
              nutrients: [
                'N : 42.29%',
                'OC : 47.73%',
                'P : 48.09%',
                'K : 50.45%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Reasi',
              nutrients: [
                'N : 47.62%',
                'OC : 45.24%',
                'P : 66.67%',
                'K : 20.63%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Samba',
              nutrients: [
                'N : 58.35%',
                'OC : 72.23%',
                'P : 83.49%',
                'K : 31.89%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Shopian',
              nutrients: [
                'N : 33.33%',
                'OC : 0.75%',
                'P : 1.61%',
                'K : 19.42%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Srinagar',
              nutrients: [
                'N : 100.00%',
                'OC : 0.00%',
                'P : 10.11%',
                'K : 0.56%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Udhampur',
              nutrients: [
                'N : 3.49%',
                'OC : 4.37%',
                'P : 41.78%',
                'K : 16.95%',
              ],
              pH: 'Slightly acidic',
            },
          ],
        },
        {
          name: 'Ladakh',
          districts: [
            {
              name: 'Kargil',
              nutrients: [
                'N : 2.10%',
                'OC : 12.33%',
                'P : 35.44%',
                'K : 30.68%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Leh Ladakh',
              nutrients: [
                'N : 8.68%',
                'OC : 2.79%',
                'P : 16.82%',
                'K : 57.30%',
              ],
              pH: 'Moderately alkaline',
            },
          ],
        },
        {
          name: 'Daman and Diu',
          districts: [
            {
              name: 'Dadra and Nagar Haveli',
              nutrients: [
                'N : 0.00%',
                'OC : 38.35%',
                'P : 69.95%',
                'K : 0.72%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Daman',
              nutrients: [
                'N : 100.00%',
                'OC : 25.80%',
                'P : 99.08%',
                'K : 32.72%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Diu',
              nutrients: [
                'N : 98.67%',
                'OC : 34.67%',
                'P : 20.00%',
                'K : 13.33%',
              ],
              pH: 'Moderately alkaline',
            },
          ],
        },

        {
          name: 'Rajasthan',
          districts: [
            {
              name: 'Ajmer',
              nutrients: [
                'N : 100.00%',
                'OC : 86.82%',
                'P : 31.30%',
                'K : 8.57%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Alwar',
              nutrients: [
                'N : 100.00%',
                'OC : 98.20%',
                'P : 12.86%',
                'K : 19.30%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Banswara',
              nutrients: [
                'N : 0.00%',
                'OC : 84.96%',
                'P : 30.10%',
                'K : 15.85%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Baran',
              nutrients: [
                'N : 0.00%',
                'OC : 47.65%',
                'P : 19.24%',
                'K : 19.93%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Barmer',
              nutrients: [
                'N : 0.00%',
                'OC : 84.11%',
                'P : 27.59%',
                'K : 15.19%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bharatpur',
              nutrients: [
                'N : 100.00%',
                'OC : 77.19%',
                'P : 38.19%',
                'K : 10.36%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bhilwara',
              nutrients: [
                'N : 0.00%',
                'OC : 75.00%',
                'P : 25.00%',
                'K : 25.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bikaner',
              nutrients: [
                'N : 0.00%',
                'OC : 92.79%',
                'P : 45.48%',
                'K : 2.12%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bundi',
              nutrients: ['N : 0.00%', 'OC : 43.62%', 'P : 6.53%', 'K : 3.23%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chittorgarh',
              nutrients: ['N : 0.00%', 'OC : 42.95%', 'P : 6.13%', 'K : 1.48%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Churu',
              nutrients: [
                'N : 0.00%',
                'OC : 99.36%',
                'P : 96.03%',
                'K : 1.61%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dausa',
              nutrients: [
                'N : 0.00%',
                'OC : 95.07%',
                'P : 21.56%',
                'K : 3.55%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dholpur',
              nutrients: [
                'N : 0.00%',
                'OC : 98.10%',
                'P : 11.93%',
                'K : 9.72%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dungarpur',
              nutrients: [
                'N : 100.00%',
                'OC : 45.44%',
                'P : 12.03%',
                'K : 7.67%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ganganagar',
              nutrients: [
                'N : 0.00%',
                'OC : 95.78%',
                'P : 40.86%',
                'K : 5.44%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Hanumangarh',
              nutrients: [
                'N : 100.00%',
                'OC : 96.92%',
                'P : 31.83%',
                'K : 6.95%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jaipur',
              nutrients: [
                'N : 83.34%',
                'OC : 85.78%',
                'P : 29.27%',
                'K : 26.09%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jaisalmer',
              nutrients: ['N : 0.00%', 'OC : 99.77%', 'P : 0.51%', 'K : 1.03%'],
              pH: 'Strongly alkaline',
            },
            {
              name: 'Jalore',
              nutrients: [
                'N : 0.00%',
                'OC : 91.55%',
                'P : 10.96%',
                'K : 11.55%',
              ],
              pH: 'Moderately alkaline and strongly alkaline',
            },
            {
              name: 'Jhalawar',
              nutrients: [
                'N : 0.00%',
                'OC : 65.10%',
                'P : 15.45%',
                'K : 5.02%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jhunjhunu',
              nutrients: [
                'N : 0.00%',
                'OC : 99.55%',
                'P : 23.40%',
                'K : 11.80%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jodhpur',
              nutrients: [
                'N : 0.00%',
                'OC : 97.46%',
                'P : 13.75%',
                'K : 13.62%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Karauli',
              nutrients: [
                'N : 0.00%',
                'OC : 56.11%',
                'P : 20.03%',
                'K : 6.33%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kota',
              nutrients: [
                'N : 0.00%',
                'OC : 39.07%',
                'P : 19.07%',
                'K : 3.68%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Nagaur',
              nutrients: [
                'N : 100.00%',
                'OC : 94.00%',
                'P : 30.92%',
                'K : 12.83%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Pali',
              nutrients: [
                'N : 88.89%',
                'OC : 91.36%',
                'P : 16.82%',
                'K : 1.28%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Pratapgarh',
              nutrients: ['N : 0.00%', 'OC : 64.72%', 'P : 4.91%', 'K : 2.94%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rajsamand',
              nutrients: [
                'N : 0.00%',
                'OC : 55.97%',
                'P : 19.52%',
                'K : 4.01%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sawai Madhopur',
              nutrients: [
                'N : 0.00%',
                'OC : 94.07%',
                'P : 20.18%',
                'K : 13.31%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sikar',
              nutrients: [
                'N : 0.00%',
                'OC : 100.00%',
                'P : 0.00%',
                'K : 0.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sirohi',
              nutrients: [
                'N : 100.00%',
                'OC : 74.47%',
                'P : 4.32%',
                'K : 1.37%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Tonk',
              nutrients: [
                'N : 0.00%',
                'OC : 94.56%',
                'P : 18.26%',
                'K : 12.42%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Udaipur',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 0.00%',
                'K : 0.00%',
              ],
              pH: 'Moderately alkaline',
            },
          ],
        },
        {
          name: 'Karnataka',
          districts: [
            {
              name: 'Bagalkot',
              nutrients: [
                'N : 39.11%',
                'OC : 51.32%',
                'P : 41.25%',
                'K : 7.13%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bangalore Rural',
              nutrients: [
                'N : 96.70%',
                'OC : 72.26%',
                'P : 14.88%',
                'K : 14.89%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Belgaum',
              nutrients: [
                'N : 79.05%',
                'OC :90.87%',
                'P : 95.33%',
                'K : 36.65%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bellary',
              nutrients: [
                'N : 100.00%',
                'OC : 47.33%',
                'P : 53.08%',
                'K : 48.13%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bengaluru Urban',
              nutrients: [
                'N : 93.97%',
                'OC : 67.57%',
                'P : 29.57%',
                'K : 28.60%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bidar',
              nutrients: [
                'N : 86.13%',
                'OC : 47.16%',
                'P : 68.60%',
                'K : 0.30%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bijapur',
              nutrients: [
                'N : 96.80%',
                'OC : 89.18%',
                'P : 23.29%',
                'K : 3.07%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chamarajanagar',
              nutrients: [
                'N : 55.87%',
                'OC : 83.65%',
                'P : 10.52%',
                'K : 11.42%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chikballapur',
              nutrients: [
                'N : 95.75%',
                'OC : 49.49%',
                'P : 28.78%',
                'K : 9.91%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chikmagalur',
              nutrients: [
                'N : 75.00%',
                'OC : 35.91%',
                'P : 20.03%',
                'K : 12.71%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chitradurga',
              nutrients: [
                'N : 0.00%',
                'OC : 33.33%',
                'P : 50.00%',
                'K : 0.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dakshin Kannad',
              nutrients: [
                'N : 100.00%',
                'OC : 4.00%',
                'P : 64.96%',
                'K : 94.50%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Davangere',
              nutrients: [
                'N : 31.08%',
                'OC : 46.68%',
                'P : 9.19%',
                'K : 26.04%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dharwad',
              nutrients: [
                'N : 86.67%',
                'OC : 92.16%',
                'P : 100.00%',
                'K : 13.82%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Gadag',
              nutrients: [
                'N : 83.25%',
                'OC : 54.19%',
                'P : 62.42%',
                'K : 2.26%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Gulbarga',
              nutrients: [
                'N : 71.42%',
                'OC : 39.88%',
                'P : 14.83%',
                'K : 1.87%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Hassan',
              nutrients: [
                'N : 19.82%',
                'OC : 27.42%',
                'P : 19.89%',
                'K : 5.86%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Haveri',
              nutrients: [
                'N : 44.69%',
                'OC : 77.99%',
                'P : 60.16%',
                'K : 13.06%',
              ],
              pH: 'Strongly alkaline',
            },
            {
              name: 'Kodagu',
              nutrients: [
                'N : 5.90%',
                'OC : 13.75%',
                'P : 47.53%',
                'K : 29.57%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Kolar',
              nutrients: [
                'N : 98.18%',
                'OC : 99.37%',
                'P : 32.28%',
                'K : 27.48%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Koppal',
              nutrients: [
                'N : 100.00%',
                'OC : 98.34%',
                'P : 0.00%',
                'K : 0.41%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mandya',
              nutrients: [
                'N : 41.85%',
                'OC : 26.78%',
                'P : 14.31%',
                'K : 8.02%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mysore',
              nutrients: [
                'N : 100.00%',
                'OC : 54.74%',
                'P : 10.57%',
                'K : 0.96%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Raichur',
              nutrients: [
                'N : 100.00%',
                'OC : 1.55%',
                'P : 0.39%',
                'K : 97.22%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ramanagara',
              nutrients: [
                'N : 31.89%',
                'OC : 71.57%',
                'P : 17.14%',
                'K : 87.12%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Shimoga',
              nutrients: [
                'N : 97.03%',
                'OC : 41.48%',
                'P : 19.76%',
                'K : 41.42%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Tumkur',
              nutrients: [
                'N : 100.00%',
                'OC : 77.14%',
                'P : 38.40%',
                'K : 19.48%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Udupi',
              nutrients: [
                'N : 99.86%',
                'OC : 9.27%',
                'P : 33.95%',
                'K : 43.42%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Uttar Kannad',
              nutrients: [
                'N : 76.19%',
                'OC : 5.72%',
                'P : 43.29%',
                'K : 54.89%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Yadgir',
              nutrients: [
                'N : 94.21%',
                'OC : 60.32%',
                'P : 49.11%',
                'K : 4.95%',
              ],
              pH: 'Moderately alkaline',
            },
          ],
        },
        {
          name: 'Mizoram',
          districts: [
            {
              name: 'Aizawl',
              nutrients: [
                'N : 1.08%',
                'OC : 61.51%',
                'P : 99.68%',
                'K : 20.40%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Champhai',
              nutrients: [
                'N : 0.89%',
                'OC : 51.30%',
                'P : 99.62%',
                'K : 9.37%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Kolasib',
              nutrients: [
                'N : 16.90%',
                'OC : 38.78%',
                'P : 97.24%',
                'K : 12.25%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Lawngtlai',
              nutrients: [
                'N : 28.21%',
                'OC : 39.64%',
                'P : 88.23%',
                'K : 27.95%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Lunglei',
              nutrients: [
                'N : 27.68%',
                'OC : 47.73%',
                'P : 89.10%',
                'K : 23.97%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Mamit',
              nutrients: [
                'N : 59.47%',
                'OC : 6.32%',
                'P : 95.26%',
                'K : 13.15%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Saiha',
              nutrients: [
                'N : 43.34%',
                'OC : 37.53%',
                'P : 87.89%',
                'K : 30.51%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Serchhip',
              nutrients: [
                'N : 50.00%',
                'OC : 50.00%',
                'P : 0.00%',
                'K : 100.00%',
              ],
              pH: 'Highly acidic',
            },
          ],
        },
        {
          name: 'Odisha',
          districts: [
            {
              name: 'Anugul',
              nutrients: [
                'N : 0.00%',
                'OC : 40.00%',
                'P : 100.00%',
                'K : 0.00%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Balangir',
              nutrients: [
                'N : 100.00%',
                'OC : 20.73%',
                'P : 87.53%',
                'K : 29.06%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Baleshwar',
              nutrients: [
                'N : 100.00%',
                'OC :97.20%',
                'P : 87.12%',
                'K : 93.48%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Bargarh',
              nutrients: [
                'N : 0.00%',
                'OC : 9.31%',
                'P : 33.72%',
                'K : 44.19%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Bhadrak',
              nutrients: [
                'N : 89.23%',
                'OC : 32.61%',
                'P : 87.18%',
                'K : 80.24%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Boudh',
              nutrients: [
                'N : 100.00%',
                'OC : 34.70%',
                'P : 54.31%',
                'K : 7.50%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Cuttack',
              nutrients: [
                'N : 54.70%',
                'OC : 71.71%',
                'P : 73.02%',
                'K : 62.88%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Deogarh',
              nutrients: [
                'N : 68.75%',
                'OC : 81.93%',
                'P : 55.40%',
                'K : 10.97%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Dhenkanal',
              nutrients: [
                'N : 100.00%',
                'OC : 78.24%',
                'P : 44.15%',
                'K : 12.26%',
              ],
              pH: 'Strongly acidic',
            },
            {
              name: 'Gajapati',
              nutrients: [
                'N : 0.00%',
                'OC : 40.00%',
                'P : 100.00%',
                'K : 18.00%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Ganjam',
              nutrients: [
                'N : 100.00%',
                'OC : 64.16%',
                'P : 87.96%',
                'K : 27.83%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Jagatsinghapur',
              nutrients: [
                'N : 0.00%',
                'OC : 77.83%',
                'P : 71.78%',
                'K : 39.19%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Jajapur',
              nutrients: [
                'N : 0.00%',
                'OC : 75.67%',
                'P : 94.59%',
                'K : 56.76%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Jharsuguda',
              nutrients: [
                'N : 100.00%',
                'OC : 65.22%',
                'P : 68.73%',
                'K : 67.48%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Kalahandi',
              nutrients: [
                'N : 100.00%',
                'OC : 88.73%',
                'P : 93.70%',
                'K : 6.50%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Kandhamai',
              nutrients: [
                'N : 100.00%',
                'OC : 91.64%',
                'P : 97.66%',
                'K : 11.76%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Kendrapara',
              nutrients: [
                'N : 100.00%',
                'OC : 54.22%',
                'P : 68.14%',
                'K : 29.13%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Kendujhar',
              nutrients: [
                'N : 100.00%',
                'OC : 71.64%',
                'P : 91.18%',
                'K : 80.71%',
              ],
              pH: 'Strongly acidic',
            },
            {
              name: 'Khordha',
              nutrients: [
                'N : 100.00%',
                'OC : 33.49%',
                'P : 64.09%',
                'K : 40.59%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Koraput',
              nutrients: [
                'N : 62.45%',
                'OC : 56.38%',
                'P : 86.60%',
                'K : 15.63%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Malkangiri',
              nutrients: [
                'N : 100.00%',
                'OC : 68.63%',
                'P : 10.29%',
                'K : 40.59%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Mayurbhang',
              nutrients: [
                'N : 100.00%',
                'OC : 47.24%',
                'P : 98.24%',
                'K : 61.63%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Navarangpur',
              nutrients: [
                'N : 100.00%',
                'OC : 84.38%',
                'P : 71.91%',
                'K : 24.01%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Nayagarh',
              nutrients: [
                'N : 100.00%',
                'OC : 81.59%',
                'P : 92.02%',
                'K : 30.20%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Nuapada',
              nutrients: [
                'N : 100.00%',
                'OC : 76.94%',
                'P : 91.76%',
                'K : 3.47%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Puri',
              nutrients: [
                'N : 87.50%',
                'OC : 39.65%',
                'P : 87.70%',
                'K : 52.43%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Rayagada',
              nutrients: [
                'N : 48.99%',
                'OC : 67.67%',
                'P : 66.49%',
                'K : 16.40%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Sambalpur',
              nutrients: [
                'N : 81.48%',
                'OC : 63.01%',
                'P : 73.65%',
                'K : 22.57%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Sonepur',
              nutrients: [
                'N : 100.00%',
                'OC : 99.96%',
                'P : 8.37%',
                'K : 26.21%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Sundargarh',
              nutrients: [
                'N : 100.00%',
                'OC : 55.59%',
                'P : 65.64%',
                'K : 44.13%',
              ],
              pH: 'Moderately acidic',
            },
          ],
        },
        {
          name: 'Telangana',
          districts: [
            {
              name: 'Adilabad',
              nutrients: [
                'N : 81.39%',
                'OC : 93.29%',
                'P : 96.50%',
                'K : 37.11%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bhadradri Kothagudem',
              nutrients: [
                'N : 92.96%',
                'OC : 88.05%',
                'P : 26.34%',
                'K : 57.17%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Hyderabad',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 100.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Karimnagar',
              nutrients: [
                'N : 63.48%',
                'OC : 73.36%',
                'P : 5.65%',
                'K : 3.41%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Khammam',
              nutrients: [
                'N : 99.67%',
                'OC : 91.95%',
                'P : 24.17%',
                'K : 2.69%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mahbubnagar',
              nutrients: [
                'N : 71.90%',
                'OC : 46.58%',
                'P : 9.07%',
                'K : 26.71%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Medak',
              nutrients: [
                'N : 96.90%',
                'OC : 23.58%',
                'P : 7.58%',
                'K : 0.68%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mulugu',
              nutrients: [
                'N : 86.66%',
                'OC : 86.67%',
                'P : 26.66%',
                'K : 13.33%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Nalgonda',
              nutrients: [
                'N : 96.55%',
                'OC : 18.97%',
                'P : 79.31%',
                'K : 94.83%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Narayanapet',
              nutrients: [
                'N : 72.35%',
                'OC : 53.58%',
                'P : 13.83%',
                'K : 7.82%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Nizamabad',
              nutrients: [
                'N : 81.69%',
                'OC : 85.02%',
                'P : 4.67%',
                'K : 17.92%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rangareddi',
              nutrients: [
                'N : 96.55%',
                'OC : 60.52%',
                'P : 3.88%',
                'K : 43.04%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Warangal',
              nutrients: [
                'N : 97.54%',
                'OC : 81.96%',
                'P : 21.62%',
                'K : 15.05%',
              ],
              pH: 'Moderately acidic',
            },
          ],
        },
        {
          name: 'Punjab',
          districts: [
            {
              name: 'Amritsar',
              nutrients: [
                'N : 91.67%',
                'OC : 84.87%',
                'P : 61.93%',
                'K : 23.83%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Barnala',
              nutrients: [
                'N : 55.53%',
                'OC : 61.3%',
                'P : 83.69%',
                'K : 75.32%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bathinda',
              nutrients: [
                'N : 100.00%',
                'OC : 22.22%',
                'P : 90.60%',
                'K : 42.96%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Faridkot',
              nutrients: ['N : 0.00%', 'OC : 0.00%', 'P : 0.00%', 'K : 0.00%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Fatehgarh Sahib',
              nutrients: [
                'N : 100.00%',
                'OC : 81.25%',
                'P : 54.99%',
                'K : 31.53%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Fazilka',
              nutrients: [
                'N : 0.00%',
                'OC : 12.23%',
                'P : 23.85%',
                'K : 13.79%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Firozepur',
              nutrients: [
                'N : 100.00%',
                'OC : 90.66%',
                'P : 57.64%',
                'K : 11.09%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Gurdaspur',
              nutrients: [
                'N : 48.38%',
                'OC : 97.90%',
                'P : 58.55%',
                'K : 37.75%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Hoshiarpur',
              nutrients: [
                'N : 100.00%',
                'OC : 0.00%',
                'P : 100.00%',
                'K : 0.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jalandhar',
              nutrients: [
                'N : 100.00%',
                'OC : 51.08%',
                'P : 38.41%',
                'K : 41.01%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kapurthala',
              nutrients: [
                'N : 100.00%',
                'OC : 78.53%',
                'P : 64.30%',
                'K : 13.44%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ludiana',
              nutrients: [
                'N : 100.00%',
                'OC : 90.06%',
                'P : 80.99%',
                'K : 79.29%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mansa',
              nutrients: [
                'N : 0.00%',
                'OC : 0.00%',
                'P : 100.00%',
                'K : 100.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Moga',
              nutrients: [
                'N : 0.00%',
                'OC : 73.03%',
                'P : 52.44%',
                'K : 20.07%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Muktsar',
              nutrients: [
                'N : 100.00%',
                'OC : 64.02%',
                'P : 68.02%',
                'K : 18.93%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Nawanshahr',
              nutrients: ['N : 0.00%', 'OC : 41.38%', 'P : 0.00%', 'K : 0.00%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Pathankot',
              nutrients: [
                'N : 100.00%',
                'OC : 97.53%',
                'P : 60.77%',
                'K : 22.04%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Patiala',
              nutrients: [
                'N : 100.00%',
                'OC : 92.64%',
                'P : 58.72%',
                'K : 34.35%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rupnagar',
              nutrients: ['N : 0.00%', 'OC : 7.14%', 'P : 0.00%', 'K : 14.29%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'S.A.S Nagar',
              nutrients: [
                'N : 7.97%',
                'OC : 92.82%',
                'P : 32.47%',
                'K : 36.46%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sangrur',
              nutrients: [
                'N : 100.00%',
                'OC : 95.28%',
                'P : 54.97%',
                'K : 6.16%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Tarn Taran',
              nutrients: [
                'N : 100.00%',
                'OC : 92.91%',
                'P : 58.77%',
                'K : 29.85%',
              ],
              pH: 'Moderately alkaline',
            },
          ],
        },
        {
          name: 'BIHAR',
          districts: [
            {
              name: 'Aaria',
              nutrients: [
                'N : 72.82%',
                'OC : 58.25%',
                'P : 75.08%',
                'K : 23.62%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Arwal',
              nutrients: [
                'N : 35.42%',
                'OC : 77.08%',
                'P : 62.50%',
                'K : 8.33%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Aurangabad',
              nutrients: [
                'N : 11.91%',
                'OC : 23.84%',
                'P : 29.01%',
                'K : 3.63%',
              ],
              pH: '',
            },
            {
              name: 'Banka',
              nutrients: ['N : 41.57%', 'OC : 42.07%', 'P : 0%', 'K :57.31%'],
              pH: 'slightly acidic',
            },
            {
              name: 'Begusarai',
              nutrients: [
                'N : 100.00%',
                'OC : 8.33%',
                'P : 8.33%',
                'K : 16.67%',
              ],
              pH: 'Moderately Alkaline',
            },
            {
              name: 'Bhagalpur',
              nutrients: ['N : 99.23%', 'OC : 93.21%', 'P : 0%', 'K : 4.94%'],
              pH: 'Moderately Alkaline',
            },
            {
              name: 'Bhojpur',
              nutrients: [
                'N : 65.48%',
                'OC : 65.76%',
                'P : 27.10%',
                'K : 16.88%',
              ],
              pH: 'Moderate Alkaline',
            },
            {
              name: 'Buxar',
              nutrients: [
                'N : 29.50%',
                'OC : 54.09%',
                'P : 13.66%',
                'K : 32.51%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Darbhanga',
              nutrients: [
                'N : 61.85%',
                'OC : 36.69%',
                'P : 50.00%',
                'K : 30.16%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Gaya',
              nutrients: ['N : 1.56%', 'OC : 1.87%', 'P : 0%', 'K : 1.87%'],
              pH: '',
            },
            {
              name: 'Gopalganj',
              nutrients: [
                'N : 99.23%',
                'OC : 44.80%',
                'P : 7.45%',
                'K : 11.30%',
              ],
              pH: 'moderately alkaline',
            },
            {
              name: 'Jamui',
              nutrients: [
                'N : 47.84%',
                'OC : 41.62%',
                'P : 0.24%',
                'K : 25.60%',
              ],
              pH: '',
            },
            {
              name: 'Jahanabad',
              nutrients: [
                'N : 26.98%',
                'OC : 13.82%',
                'P : 6.67%',
                'K : 9.74%',
              ],
              pH: '',
            },
            {
              name: 'Kaimur',
              nutrients: [
                'N : 30.56%',
                'OC : 50.00%',
                'P : 38.89%',
                'K : 13.89%',
              ],
              pH: 'moderatly alkaline',
            },
            {
              name: 'Katihar',
              nutrients: [
                'N : 50.58%',
                'OC : 27.76%',
                'P : 35.99%',
                'K : 8.20%',
              ],
              pH: 'Slightly acidic',
            },
            {
              name: 'Khagaria',
              nutrients: [
                'N : 22.52%',
                'OC : 0.82%',
                'P : 2.89%',
                'K : 13.40%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kishanganj',
              nutrients: [
                'N : 67.66%',
                'OC : 35.33%',
                'P : 24.34%',
                'K : 28.33%',
              ],
              pH: '',
            },
            {
              name: 'Lakhisarai',
              nutrients: ['N : 20.51%', 'OC : 6.53%', 'P : 0.70%', 'K : 2.21%'],
              pH: '',
            },
            {
              name: 'Madhepura',
              nutrients: [
                'N : 60.49%',
                'OC : 51.85%',
                'P : 18.10%',
                'K : 27.57%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Madhubani',
              nutrients: [
                'N : 57.36%',
                'OC : 40.80%',
                'P : 13.60%',
                'K : 50.04%',
              ],
              pH: '',
            },
            {
              name: 'Munger',
              nutrients: [
                'N : 42.30%',
                'OC : 33.78%',
                'P : 6.02%',
                'K : 9.37%',
              ],
              pH: 'Moderatly alkaline',
            },
            {
              name: 'Muzaffarpur',
              nutrients: [
                'N : 96.56%',
                'OC : 17.78%',
                'P : 18.79%',
                'K : 23.03%',
              ],
              pH: 'Moderatly alkaline',
            },
            {
              name: 'Nalanda',
              nutrients: [
                'N : 34.84%',
                'OC : 57.23%',
                'P : 62.10%',
                'K : 44.51%',
              ],
              pH: '',
            },
            {
              name: 'Nawada',
              nutrients: [
                'N : 11.87%',
                'OC : 31.82%',
                'P : 30.60%',
                'K : 12.33%',
              ],
              pH: '',
            },
            {
              name: 'Pashchim Champaran',
              nutrients: [
                'N : 99.04%',
                'OC : 58.58%',
                'P : 2.00%',
                'K : 20.73%',
              ],
              pH: '',
            },
            {
              name: 'Patna',
              nutrients: [
                'N : 16.76%',
                'OC : 29.52%',
                'P : 18.88%',
                'K : 26.75%',
              ],
              pH: '',
            },
            {
              name: 'Purbi Champaran',
              nutrients: [
                'N : 94.86%',
                'OC : 35.46%',
                'P : 13.91%',
                'K : 28.66%',
              ],
              pH: '',
            },
            {
              name: 'Purnia',
              nutrients: [
                'N : 84.96%',
                'OC : 72.56%',
                'P : 17.90%',
                'K : 49.88%',
              ],
              pH: '',
            },
            {
              name: 'Rohtas',
              nutrients: [
                'N : 13.18%',
                'OC : 25.36%',
                'P : 9.81%',
                'K : 7.64%',
              ],
              pH: 'Modeartely alkaline',
            },
            {
              name: 'Saharsa',
              nutrients: [
                'N : 22.26%',
                'OC : 1.77%',
                'P : 1.77%',
                'K : 50.27%',
              ],
              pH: '',
            },
            {
              name: 'Samastipur',
              nutrients: [
                'N : 98.50%',
                'OC : 6.92%',
                'P : 14.54%',
                'K : 2.13%',
              ],
              pH: '',
            },
            {
              name: 'Saran',
              nutrients: [
                'N : 98.42%',
                'OC : 44.42%',
                'P : 1.99%',
                'K : 0.45%',
              ],
              pH: '',
            },
            {
              name: 'Sheikhpur',
              nutrients: [
                'N : 99.45%',
                'OC : 14.36%',
                'P : 70.72%',
                'K : 50.27%',
              ],
              pH: '',
            },
            {
              name: 'Sheohar',
              nutrients: ['N : 11.11%', 'OC : 0%', 'P : 6.35%', 'K : 66.67%'],
              pH: '',
            },
            {
              name: 'Sitamarhi',
              nutrients: [
                'N : 25.09%',
                'OC : 17.00%',
                'P : 37.52%',
                'K : 57.48%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Siwan',
              nutrients: [
                'N : 97.44%',
                'OC : 48.72%',
                'P : 10.26%',
                'K : 20.51%',
              ],
              pH: '',
            },
            {
              name: 'Supaul',
              nutrients: [
                'N : 65.80%',
                'OC : 45.78%',
                'P : 17.21%',
                'K : 12.97%',
              ],
              pH: '',
            },
            {
              name: 'Vaishali',
              nutrients: [
                'N : 98.31%',
                'OC : 27.88%',
                'P : 31.41%',
                'K : 16.79%',
              ],
              pH: '',
            },
          ],
        },
        {
          name: 'ARUNACHAL PRADESH',
          districts: [
            {
              name: 'Anjaw',
              nutrients: [
                'N : 0.11%',
                'OC : 0.17%',
                'P : 97.08%',
                'K : 60.48%',
              ],
              pH: '',
            },
            {
              name: 'Changlang',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 100.00%', 'K : 0%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Dibang valley',
              nutrients: [
                'N : 0.48%',
                'OC : 5.07%',
                'P : 79.85%',
                'K : 20.27%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'East Kameng',
              nutrients: ['N :4.05%', 'OC : 6.37%', 'P : 84.33%', 'K : 16.22%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'East siang',
              nutrients: ['N : 0.70%', 'OC : 0%', 'P : 93.59%', 'K : 39.48%'],
              pH: 'Strongly acidic',
            },
            {
              name: 'Kra Daadi',
              nutrients: ['N : 0%', 'OC : 22.22%', 'P : 88.89%', 'K : 33.33%'],
              pH: '',
            },
            {
              name: 'Kurung Kumeng',
              nutrients: [
                'N : 1.37%',
                'OC : 3.62%',
                'P : 93.98%',
                'K : 18.42%',
              ],
              pH: 'highly acidic',
            },
            {
              name: 'Lohit',
              nutrients: [
                'N : 3.60%',
                'OC : 8.64%',
                'P : 72.63%',
                'K : 12.60%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Lower Dibang Valley',
              nutrients: [
                'N : 0.10%',
                'OC : 0.20%',
                'P : 93.03%',
                'K : 60.04%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Lower Subansiri',
              nutrients: ['N : 50.00%', 'OC : 0%', 'P : 50.00%', 'K : 50.00%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Namsai',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 9.09%', 'K : 27.27%'],
              pH: '',
            },
            {
              name: 'Papum Pare',
              nutrients: ['N : 0%', 'OC : 1.73%', 'P : 89.02%', 'K : 98.55%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Tawang',
              nutrients: ['N : 5.08%', 'OC : 9.46%', 'P : 82.87%', 'K : 8.11%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Tirap',
              nutrients: ['N : 0.17%', 'OC : 0%', 'P : 39.00%', 'K : 18.67%'],
              pH: '',
            },
            {
              name: 'Upper Siang',
              nutrients: [
                'N : 4.13%',
                'OC : 13.84%',
                'P : 96.86%',
                'K : 16.83%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Upper Subansiri',
              nutrients: [
                'N : 0.88%',
                'OC : 23.12%',
                'P : 84.47%',
                'K : 33.08%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'West Kameng',
              nutrients: ['N : 0.55%', 'OC : 0%', 'P : 98.36%', 'K : 98.90%'],
              pH: 'Highly acidc',
            },
            {
              name: 'West Siang',
              nutrients: [
                'N : 0.28%',
                'OC : 0.14%',
                'P : 94.26%',
                'K : 18.73%',
              ],
              pH: 'Moderately acidic',
            },
          ],
        },

        {
          name: 'DELHI',
          districts: [
            {
              name: 'Central',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 100.00%', 'K : 100.00%'],
              pH: '',
            },
            {
              name: 'East',
              nutrients: ['N : 100.00%', 'OC : 0%', 'P : 100.00%', 'K : 0%'],
              pH: '',
            },
            {
              name: 'North',
              nutrients: [
                'N : 16.94%',
                'OC : 13.66%',
                'P : 95.09%',
                'K : 20.77%',
              ],
              pH: '',
            },
            {
              name: 'North West',
              nutrients: [
                'N : 25.16%',
                'OC : 17.65%',
                'P : 95.75%',
                'K : 1.30%',
              ],
              pH: '',
            },
            {
              name: 'Shahdara',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 100.00%', 'K : 66.67%'],
              pH: '',
            },
            {
              name: 'south West',
              nutrients: [
                'N : 32.49%',
                'OC : 28.52%',
                'P : 84.32%',
                'K : 20.74%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'West',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 0%', 'K : 100.00%'],
              pH: '',
            },
          ],
        },

        {
          name: 'JHARKHAND',
          districts: [
            {
              name: 'Bokaro',
              nutrients: ['N : 16.67%', 'OC : 0%', 'P : 25.00%', 'K : 0%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Chatra',
              nutrients: [
                'N : 47.78%',
                'OC : 71.81%',
                'P : 55.92%',
                'K : 72.59%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Deoghar',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 58.33%', 'K : 66.67%'],
              pH: '',
            },
            {
              name: 'Dhanbad',
              nutrients: [
                'N : 81.25%',
                'OC : 75.00%',
                'P : 50.00%',
                'K : 100.00%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Dumka',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 100.00%', 'K : 23.62%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'East Singhbum',
              nutrients: [
                'N : 78.93%',
                'OC : 65.92%',
                'P : 29.14%',
                'K : 62.33%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Garhwa',
              nutrients: [
                'N : 100.00%',
                'OC : 60.00%',
                'P : 25.00%',
                'K : 15.00%',
              ],
              pH: 'Moderately Alkaline',
            },
            {
              name: 'Giridih',
              nutrients: [
                'N : 68.87%',
                'OC : 31.62%',
                'P : 70.23%',
                'K : 50.72%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Godda',
              nutrients: [
                'N : 79.89%',
                'OC : 66.69%',
                'P : 73.23%',
                'K : 52.62%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Gumla',
              nutrients: [
                'N : 68.14%',
                'OC : 37.35%',
                'P : 45.99%',
                'K : 54.90%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Jamtara',
              nutrients: [
                'N : 100.00%',
                'OC : 57.14%',
                'P : 100.00%',
                'K : 42.86%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Khunti',
              nutrients: [
                'N : 12.93%',
                'OC : 25.86%',
                'P : 52.59%',
                'K : 37.93%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Koderma',
              nutrients: [
                'N : 68.05%',
                'OC : 59.31%',
                'P : 19.31%',
                'K : 13.10%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Latehar',
              nutrients: [
                'N : 56.66%',
                'OC : 62.32%',
                'P : 79.60%',
                'K : 6.80%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Lohardaga',
              nutrients: [
                'N : 50.31%',
                'OC : 42.13%',
                'P : 59.12%',
                'K : 94.34%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Palamu',
              nutrients: [
                'N : 58.10%',
                'OC : 49.32%',
                'P : 74.33%',
                'K : 71.62%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ranchi',
              nutrients: [
                'N : 19.51%',
                'OC : 51.22%',
                'P : 2.44%',
                'K : 9.76%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Saraikela Kharsawan',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 100.00%', 'K : 0%'],
              pH: 'Highly acidic',
            },
            {
              name: 'West Singhbhum',
              nutrients: [
                'N : 44.17%',
                'OC : 26.65%',
                'P : 57.15%',
                'K : 84.23%',
              ],
              pH: 'Highly acidic',
            },
          ],
        },

        {
          name: 'NAGALAND',
          districts: [
            {
              name: 'Dimapur',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 100.00%', 'K : 0%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Kiphir',
              nutrients: [
                'N : 5.97%',
                'OC : 5.93%',
                'P : 100.00%',
                'K : 11.03%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Kohima',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 0%', 'K : 0%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Longleng',
              nutrients: [
                'N : 19.76%',
                'OC : 5.27%',
                'P : 38.17%',
                'K : 26.19%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Mokomchung',
              nutrients: [
                'N : 8.97%',
                'OC : 1.16%',
                'P : 91.45%',
                'K : 26.37%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Mon',
              nutrients: [
                'N : 2.77%',
                'OC : 2.04%',
                'P : 84.07%',
                'K : 16.93%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Peren',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 100.00%', 'K : 100.00%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Phek',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 100.00%', 'K : 100.00%'],
              pH: 'Highly acidic',
            },
            {
              name: 'Tuensang',
              nutrients: [
                'N : 6.87%',
                'OC : 8.78%',
                'P : 87.90%',
                'K : 15.08%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Wokha',
              nutrients: [
                'N : 26.67%',
                'OC : 20.00%',
                'P : 22.22%',
                'K : 17.78%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Zunheboto',
              nutrients: [
                'N : 0.47%',
                'OC : 0.37%',
                'P : 94.61%',
                'K : 20.25%',
              ],
              pH: 'Highly acidic',
            },
          ],
        },
        {
          name: 'ANDAMAN AND NICOBAR',
          districts: [
            {
              name: 'Nicobars',
              nutrients: [
                'N : 99.11%',
                'OC : 65.96%',
                'P : 78.16%',
                'K : 89.89%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'North and Middle Andaman',
              nutrients: [
                'N : 99.91%',
                'OC : 85.85%',
                'P : 98.35%',
                'K : 85.05%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'South Andaman',
              nutrients: [
                'N : 98.58%',
                'OC : 74.05%',
                'P : 91.81%',
                'K : 87.86%',
              ],
              pH: 'Moderately acidic',
            },
          ],
        },
        {
          name: 'SIKKIM',
          districts: [
            {
              name: 'East District',
              nutrients: ['N : 100.00%', 'OC : 0%', 'P : 0%', 'K : 0%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'North District',
              nutrients: [
                'N : 37.07%',
                'OC : 0.15%',
                'P : 54.11%',
                'K : 1.35%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'South District',
              nutrients: [
                'N : 81.76%',
                'OC : 1.54%',
                'P : 28.79%',
                'K : 16.90%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'West District',
              nutrients: [
                'N : 78.95%',
                'OC : 36.84%',
                'P : 1.75%',
                'K : 3.51%',
              ],
              pH: 'Moderately acidic',
            },
          ],
        },
        {
          name: 'UTTAR PRADESH',
          districts: [
            {
              name: 'Agar',
              nutrients: [
                'N : 100.00%',
                'OC : 71.42%',
                'P : 100.00%',
                'K : 28.57%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Aligarh',
              nutrients: [
                'N : 95.00%',
                'OC : 100.00%',
                'P : 90.00%',
                'K : 10.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Allahabad',
              nutrients: [
                'N : 97.36%',
                'OC : 95.73%',
                'P : 96.47%',
                'K : 5.40%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ambedkar Nagar',
              nutrients: [
                'N : 99.92%',
                'OC : 98.19%',
                'P : 97.78%',
                'K : 37.96%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Amethi',
              nutrients: [
                'N : 100.00%',
                'OC : 80.00%',
                'P : 50.00%',
                'K : 20.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Amroha',
              nutrients: [
                'N : 99.81%',
                'OC : 91.16%',
                'P : 93.27%',
                'K : 24.08%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Auraiya',
              nutrients: [
                'N : 97.67%',
                'OC : 97.68%',
                'P : 95.35%',
                'K : 9.30%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Azamgarh',
              nutrients: [
                'N : 99.95%',
                'OC : 99.65%',
                'P : 86.17%',
                'K : 29.11%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Baghpat',
              nutrients: [
                'N : 99.96%',
                'OC : 80.08%',
                'P : 72.80%',
                'K : 10.03%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bahraich',
              nutrients: [
                'N : 99.93%',
                'OC : 94.11%',
                'P : 93.62%',
                'K : 58.60%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ballia',
              nutrients: [
                'N : 99.90%',
                'OC : 91.50%',
                'P : 99.54%',
                'K : 0.62%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Balrampur',
              nutrients: [
                'N : 81.39%',
                'OC : 95.35%',
                'P : 100.00%',
                'K : 37.21%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Banda',
              nutrients: [
                'N : 99.72%',
                'OC : 84.19%',
                'P : 85.47%',
                'K : 32.46%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Barabanki',
              nutrients: ['N : 100.00%', 'OC : 66.67%', 'P : 66.67%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bareilly',
              nutrients: [
                'N : 100.00%',
                'OC : 97.37%',
                'P : 100.00%',
                'K : 85.53%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Basti',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 0%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bijnor',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 0%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Budaun',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 85.72%',
                'K : 100.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bulandshahr',
              nutrients: [
                'N : 76.47%',
                'OC : 76.47%',
                'P : 70.58%',
                'K : 5.88%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chandauli',
              nutrients: [
                'N : 100.00%',
                'OC : 93.21%',
                'P : 91.98%',
                'K : 14.81%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chitrakoot',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 23.33%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Deoria',
              nutrients: [
                'N : 99.77%',
                'OC : 79.04%',
                'P : 97.08%',
                'K : 47.93%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Etah',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 0%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Etawah',
              nutrients: [
                'N : 99.79%',
                'OC : 96.14%',
                'P : 99.47%',
                'K : 12.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Faizabad',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 26.19%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Farrukhabad',
              nutrients: [
                'N : 99.96%',
                'OC : 96.30%',
                'P : 94.44%',
                'K : 4.95%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Fatehpur',
              nutrients: [
                'N : 100.00%',
                'OC : 25.64%',
                'P : 11.91%',
                'K : 0.36%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Firozabad',
              nutrients: [
                'N : 100.00%',
                'OC : 88.32%',
                'P : 84.34%',
                'K : 22.23%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Gautam Buddha Nagar',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 0%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ghaziabad',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 0%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ghazipur',
              nutrients: [
                'N : 99.84%',
                'OC : 92.96%',
                'P : 95.20%',
                'K : 49.47%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Gonda',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 0%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Gorakhpur',
              nutrients: [
                'N : 99.87%',
                'OC : 78.73%',
                'P : 97.51%',
                'K : 38.70%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Hamirpur',
              nutrients: [
                'N : 100.00%',
                'OC : 93.65%',
                'P : 100.00%',
                'K : 39.68%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Hapur',
              nutrients: [
                'N : 99.85%',
                'OC : 86.67%',
                'P : 85.88%',
                'K : 29.63%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Hardoi',
              nutrients: ['N : 100.00%', 'OC : 87.50%', 'P : 50.00%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Hathras',
              nutrients: [
                'N : 88.39%',
                'OC : 93.28%',
                'P : 73.13%',
                'K : 38.67%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jalaun',
              nutrients: [
                'N : 99.60%',
                'OC : 83.13%',
                'P : 99.97%',
                'K : 0.44%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jaunpur',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 80.00%',
                'K : 80.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jhansi',
              nutrients: [
                'N : 100.00%',
                'OC : 92.10%',
                'P : 61.84%',
                'K : 0.26%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kannauj',
              nutrients: [
                'N : 99.94%',
                'OC : 99.90%',
                'P : 99.90%',
                'K : 0.19%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kanpur Dehat',
              nutrients: [
                'N : 99.91%',
                'OC : 98.25%',
                'P : 96.52%',
                'K : 3.76%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kanpur Nagar',
              nutrients: [
                'N : 99.93%',
                'OC : 91.61%',
                'P : 97.54%',
                'K : 1.83%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kasganj',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 0%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kaushambi',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 0%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kheri',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 33.33%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kushi Nagar',
              nutrients: [
                'N : 99.53%',
                'OC : 88.18%',
                'P : 81.61%',
                'K : 40.61%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Lalitpur',
              nutrients: [
                'N : 73.48%',
                'OC : 3.52%',
                'P : 93.15%',
                'K : 0.21%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Lucknow',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 100.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Maharajganj',
              nutrients: [
                'N : 100.00%',
                'OC : 67.17%',
                'P : 45.96%',
                'K : 23.23%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mahoba',
              nutrients: [
                'N : 99.83%',
                'OC : 94.04%',
                'P : 96.45%',
                'K : 5.49%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Maipuri',
              nutrients: [
                'N : 99.28%',
                'OC : 91.86%',
                'P : 91.26%',
                'K : 14.76%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mathura',
              nutrients: [
                'N : 100.00%',
                'OC : 48.00%',
                'P : 87.50%',
                'K : 4.17%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mau',
              nutrients: [
                'N : 99.54%',
                'OC : 98.18%',
                'P : 98.85%',
                'K :5.76%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Meerut',
              nutrients: [
                'N : 99.86%',
                'OC : 77.52%',
                'P : 95.85%',
                'K : 32.13%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mirzapur',
              nutrients: [
                'N : 100.00%',
                'OC : 50.00%',
                'P : 100.00%',
                'K : 0%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Moradabad',
              nutrients: [
                'N : 99.87%',
                'OC : 92.54%',
                'P : 98.78%',
                'K : 20.07%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Muzaffarnagar',
              nutrients: [
                'N : 100.00%',
                'OC : 14.29%',
                'P : 100.00%',
                'K : 35.71%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Pilibhit',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.00%',
                'K : 100.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Pratapgarh',
              nutrients: [
                'N : 100.00%',
                'OC : 100.00%',
                'P : 100.0%',
                'K : 0%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rae Bareli',
              nutrients: [
                'N : 99.56%',
                'OC : 74.03%',
                'P : 75.54%',
                'K : 13.08%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rampur',
              nutrients: [
                'N : 99.77%',
                'OC : 94.25%',
                'P : 97.90%',
                'K : 32.58%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Saharanpur',
              nutrients: [
                'N : 100.00%',
                'OC : 89.90%',
                'P : 94.95%',
                'K : 54.55%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sambhal',
              nutrients: [
                'N : 99.49%',
                'OC : 97.41%',
                'P : 98.34%',
                'K : 20.05%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sant Kabeer Nagar',
              nutrients: [
                'N : 50.00%',
                'OC : 100.00%',
                'P : 83.33%',
                'K : 16.67%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sant Ravidas Nagar',
              nutrients: [
                'N : 99.87%',
                'OC : 92.14%',
                'P : 93.32%',
                'K : 18.85%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Shahjahanpur',
              nutrients: [
                'N : 99.77%',
                'OC : 94.22%',
                'P : 96.36%',
                'K : 26.80%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Shamli',
              nutrients: [
                'N : 100.00%',
                'OC : 92.36%',
                'P : 98.99%',
                'K : 20.16%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Shravasti',
              nutrients: [
                'N : 100.00%',
                'OC : 99.31%',
                'P : 98.61%',
                'K : 19.44%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Siddharth Nagar',
              nutrients: [
                'N : 100.00%',
                'OC : 56.14%',
                'P : 33.47%',
                'K : 6.25%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sitapur',
              nutrients: [
                'N : 100.00%',
                'OC : 92.31%',
                'P : 98.61%',
                'K : 38.46%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sonbhadra',
              nutrients: [
                'N : 41.90%',
                'OC : 86.84%',
                'P : 97.41%',
                'K : 0.62%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sultanpur',
              nutrients: [
                'N : 100.00%',
                'OC : 90.78%',
                'P : 73.76%',
                'K : 4.26%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Unnao',
              nutrients: [
                'N : 99.77%',
                'OC : 83.15%',
                'P : 9.41%',
                'K : 1.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Varanasi',
              nutrients: ['N : 0%', 'OC : 0%', 'P : 100.00%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
          ],
        },
        {
          name: 'TAMIL NADU',
          districts: [
            {
              name: 'Ariyalur',
              nutrients: [
                'N : 99.83%',
                'OC : 97.73%',
                'P : 31.94%',
                'K : 45.37%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Coimbatire',
              nutrients: [
                'N : 99.56%',
                'OC : 93.66%',
                'P : 98.47%',
                'K : 6.19%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Cuddalore',
              nutrients: [
                'N : 100.00%',
                'OC : 99.39%',
                'P : 1.82%',
                'K : 3.03%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dharmapuri',
              nutrients: [
                'N : 99.70%',
                'OC : 98.40%',
                'P : 54.10%',
                'K : 34.98%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dindigul',
              nutrients: ['N : 100.00%', 'OC : 99.53%', 'P : 44.55%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Erode',
              nutrients: [
                'N : 100.00%',
                'OC : 96.93%',
                'P : 76.41%',
                'K : 0.42%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kanchipuram',
              nutrients: [
                'N : 99.72%',
                'OC : 96.33%',
                'P : 0.09%',
                'K : 16.31%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kanniyakumari',
              nutrients: [
                'N : 99.86%',
                'OC : 94.10%',
                'P : 25.18%',
                'K : 2.56%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Karur',
              nutrients: [
                'N : 98.43%',
                'OC : 40.63%',
                'P : 66.15%',
                'K : 18.58%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Krishnagiri',
              nutrients: ['N : 100.00%', 'OC : 43.40%', 'P : 0%', 'K : 18.86%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Madurai',
              nutrients: [
                'N : 92.40%',
                'OC : 77.20%',
                'P : 3.08%',
                'K : 1.94%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Nagapattinam',
              nutrients: [
                'N : 99.87%',
                'OC : 69.62%',
                'P : 8.10%',
                'K : 29.83%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Namakkal',
              nutrients: [
                'N : 99.58%',
                'OC : 99.43%',
                'P : 80.62%',
                'K : 3.58%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Perambalur',
              nutrients: [
                'N : 99.93%',
                'OC : 77.07%',
                'P : 87.73%',
                'K : 21.22%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Pudukkottai',
              nutrients: [
                'N : 97.43%',
                'OC : 90.53%',
                'P : 14.26%',
                'K : 51.03%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ramanathapuram',
              nutrients: [
                'N : 99.69%',
                'OC : 85.00%',
                'P : 33.29%',
                'K : 6.31%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Salem',
              nutrients: [
                'N : 95.33%',
                'OC : 94.79%',
                'P : 80.58%',
                'K : 16.95%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sivaganga',
              nutrients: ['N : 100.00%', 'OC : 98.65%', 'P : 11.41%', 'K : 0%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Thanjavur',
              nutrients: [
                'N : 99.49%',
                'OC : 54.88%',
                'P : 8.84%',
                'K : 65.25%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'The Nilgiris',
              nutrients: [
                'N : 96.57%',
                'OC : 24.44%',
                'P : 29.43%',
                'K : 55.89%',
              ],
              pH: 'Highly acidic',
            },
            {
              name: 'Theni',
              nutrients: [
                'N : 100.00%',
                'OC : 96.37%',
                'P : 72.62%',
                'K : 0.41%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Thiruvallur',
              nutrients: [
                'N : 96.38%',
                'OC : 43.68%',
                'P : 24.78%',
                'K : 31.83%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Thiruvarur',
              nutrients: [
                'N : 100.00%',
                'OC : 84.61%',
                'P : 10.77%',
                'K : 7.69%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Tiruchirappalli',
              nutrients: [
                'N : 96.38%',
                'OC : 43.68%',
                'P : 24.78%',
                'K : 31.83%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Tirunelveli',
              nutrients: [
                'N : 99.87%',
                'OC : 93.91%',
                'P : 12.31%',
                'K : 14.88%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Tiruppur',
              nutrients: [
                'N : 97.42%',
                'OC : 67.29%',
                'P : 69.51%',
                'K : 8.38%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Tiruvannanmalai',
              nutrients: [
                'N : 94.51%',
                'OC : 88.04%',
                'P : 64.07%',
                'K : 61.89%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Tuticorin',
              nutrients: [
                'N : 99.93%',
                'OC : 77.50%',
                'P : 74.04%',
                'K : 8.48%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Vellore',
              nutrients: [
                'N : 97.02%',
                'OC : 85.71%',
                'P : 52.28%',
                'K : 8.95%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Villupuram',
              nutrients: [
                'N : 99.48%',
                'OC : 76.21%',
                'P : 48.51%',
                'K : 24.92%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Virudhunagar',
              nutrients: [
                'N : 99.08%',
                'OC : 89.10%',
                'P : 73.53%',
                'K : 14.59%',
              ],
              pH: 'Moderately alkaline',
            },
          ],
        },
        {
          name: 'Andhra Pradesh',
          districts: [
            {
              name: 'Anantapur',
              nutrients: ['N : 100.00%', 'OC : 50.00%', 'P : 0%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chittoor',
              nutrients: [
                'N : 96.23%',
                'OC : 36.68%',
                'P : 11.63%',
                'K : 49.93%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'East Godavari',
              nutrients: [
                'N : 70.95%',
                'OC : 48.12%',
                'P : 24.45%',
                'K : 2.42%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Guntur',
              nutrients: ['N : 72.34%', 'OC : 74.47%', 'P : 8.51%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Krishna',
              nutrients: [
                'N : 63.70%',
                'OC : 58.32%',
                'P : 1.36%',
                'K : 10.39%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Kurnool',
              nutrients: [
                'N : 98.18%',
                'OC : 62.39%',
                'P : 7.29%',
                'K : 3.66%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Prakasam',
              nutrients: [
                'N : 93.43%',
                'OC : 52.37%',
                'P : 24.88%',
                'K : 16.77%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Spsr Nellore',
              nutrients: [
                'N : 97.12%',
                'OC : 59.94%',
                'P : 11.75%',
                'K : 45.01%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Srikakulam',
              nutrients: [
                'N : 88.52%',
                'OC : 29.53%',
                'P : 42.62%',
                'K : 23.91%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Vishakhapatnam',
              nutrients: [
                'N : 88.98%',
                'OC : 22.07%',
                'P : 14.41%',
                'K : 51.42%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Vizianagaram',
              nutrients: ['N : 100.00%', 'OC : 100.00%', 'P : 0%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'West Godavari',
              nutrients: [
                'N : 87.25%',
                'OC : 33.02%',
                'P : 3.41%',
                'K : 56.53%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Y.S.R.',
              nutrients: [
                'N : 98.59%',
                'OC : 63.67%',
                'P : 19.79%',
                'K : 28.43%',
              ],
              pH: 'Moderately alkaline',
            },
          ],
        },
        {
          name: 'MADHYA PRADESH',
          districts: [
            {
              name: 'Agar Malwa',
              nutrients: [
                'N : 78.15%',
                'OC : 68.07%',
                'P : 90.75%',
                'K : 1.68%%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Alirajpur',
              nutrients: ['N : 0%', 'OC : 1.12%', 'P : 100%', 'K : 32.40%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Anuppur',
              nutrients: ['N : 100%', 'OC : 0%', 'P : 0%', 'K : 0%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Ashoknagar',
              nutrients: [
                'N : 86.77%',
                'OC : 19.81%',
                'P : 59.79%',
                'K : 10.75%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Balaghat',
              nutrients: [
                'N : 34.41%',
                'OC : 22.63%',
                'P : 52.28%',
                'K : 21.87%',
              ],
              pH: 'slightly acidic',
            },
            {
              name: 'Barwani',
              nutrients: [
                'N : 56.95%',
                'OC : 27.87%',
                'P : 54.23%',
                'K : 6.44%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Betul',
              nutrients: [
                'N : 92.05%',
                'OC : 29.97%',
                'P : 92.97%',
                'K : 1.23%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bhind',
              nutrients: ['N :99.54%', 'OC :99.05%', 'P : 99.37%', 'K : 0.69%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Bhopal',
              nutrients: [
                'N : 85.72%',
                'OC : 11.43%',
                'P : 54.28%',
                'K : 17.14%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Burhanpur',
              nutrients: [
                'N : 100.00%',
                'OC : 51.31%',
                'P : 97.37%',
                'K : 2.63%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chhatarpur',
              nutrients: [
                'N : 88.29%',
                'OC : 40.43%',
                'P : 45.19%',
                'K : 2.13%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Chhindwara',
              nutrients: [
                'N : 56.69%',
                'OC : 17.66%',
                'P : 48.00%',
                'K : 16.84%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Damoh',
              nutrients: [
                'N : 22.70%',
                'OC : 17.15%',
                'P : 96.09%',
                'K : 11.98%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Datia',
              nutrients: ['N : 28.00%', 'OC :5.33%', 'P : 14.67%', 'K : 6.66%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dewas',
              nutrients: [
                'N : 93.42%',
                'OC : 58.93%',
                'P : 40.43%',
                'K : 32.55%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dhar',
              nutrients: ['N : 91.76%', 'OC : 75.29%', 'P : 42.33%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Dindori',
              nutrients: ['N : 53.85%', 'OC : 30.77%', 'P : 100.00%', 'K : 0%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'East Nimar',
              nutrients: [
                'N : 99.23%',
                'OC : 49.23%',
                'P : 5.34%',
                'K : 3.05%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Guna',
              nutrients: [
                'N : 60.82%',
                'OC : 28.40%',
                'P : 30.49%',
                'K : 40.49%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Gwalior',
              nutrients: ['N : 98.39%', 'OC : 9.68%', 'P : 1.61%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Harda',
              nutrients: ['N : 61.59%', 'OC : 0%', 'P : 8.54%', 'K : 6.71%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Hoshangabad',
              nutrients: [
                'N : 80.13%',
                'OC : 40.70%',
                'P : 23.33%',
                'K : 0.94%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Indore',
              nutrients: [
                'N : 99.98%',
                'OC : 83.89%',
                'P : 99.55%',
                'K : 0.20%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'jabalpur',
              nutrients: [
                'N : 60.21%',
                'OC : 30.01%',
                'P : 42.22%',
                'K : 4.73%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Jhabua',
              nutrients: [
                'N : 55.00%',
                'OC : 5.00%',
                'P : 60.00%',
                'K : 5.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'katni',
              nutrients: [
                'N : 61.90%',
                'OC : 28.57%',
                'P : 33.93%',
                'K : 23.35%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Khargone',
              nutrients: ['N : 26.47%', 'OC : 2.94%', 'P : 100%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Mandla',
              nutrients: ['N : 43.75%', 'OC : 4.69%', 'P : 29.69%', 'K : 0%'],
              pH: 'Moderately acidic',
            },
            {
              name: 'Mandsaur',
              nutrients: [
                'N : 39.21%',
                'OC : 3.92%',
                'P : 98.04%',
                'K : 1.96%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Morena',
              nutrients: [
                'N : 44.99%',
                'OC : 26.99%',
                'P : 1.73%',
                'K : 1.84%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Narsinghpur',
              nutrients: [
                'N : 99.21%',
                'OC : 36.36%',
                'P : 59.80%',
                'K : 17.50%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Neemuch',
              nutrients: [
                'N : 46.71%',
                'OC : 3.89%',
                'P : 99.71%',
                'K : 0.17%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Panna',
              nutrients: [
                'N : 75.51%',
                'OC : 5.10%',
                'P : 81.63%',
                'K : 15.30%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Raisen',
              nutrients: [
                'N : 73.34%',
                'OC : 53.34%',
                'P : 60.00%',
                'K : 6.67%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rajgarh',
              nutrients: [
                'N : 91.32%',
                'OC : 64.02%',
                'P : 59.05%',
                'K : 4.35%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ratlam',
              nutrients: [
                'N : 96.83%',
                'OC : 63.96%',
                'P : 97.59%',
                'K : 0.51%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Rewa',
              nutrients: [
                'N : 75.65%',
                'OC : 25.09%',
                'P : 97.78%',
                'K : 0.37%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sagar',
              nutrients: [
                'N : 13.33%',
                'OC : 13.34%',
                'P : 100%',
                'K : 46.67%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Satna',
              nutrients: [
                'N : 92.04%',
                'OC : 57.71%',
                'P : 8.00%',
                'K : 44.50%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sehore',
              nutrients: [
                'N : 50.00%',
                'OC : 33.33%',
                'P : 50.00%',
                'K : 33.33%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Seoni',
              nutrients: ['N : 53.97%', 'OC : 50.79%', 'P : 98.41%', 'K : 0%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Shahdol',
              nutrients: [
                'N : 75.57%',
                'OC : 41.33%',
                'P : 99.01%',
                'K : 0.76%',
              ],
              pH: 'Moderately acidic',
            },
            {
              name: 'Shajapur',
              nutrients: ['N : 100.00%', 'OC : 50.00%', 'P : 0%', 'K : 50.00%'],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sheopur',
              nutrients: [
                'N : 96.22%',
                'OC : 55.66%',
                'P : 92.76%',
                'K : 16.35%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Shivpuri',
              nutrients: [
                'N : 85.87%',
                'OC : 80.44%',
                'P : 8.70%',
                'K : 5.44%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Sidhi',
              nutrients: [
                'N : 44.28%',
                'OC : 56.00%',
                'P : 3.13%',
                'K : 2.59%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Singrauli',
              nutrients: [
                'N : 93.34%',
                'OC : 80.00%',
                'P : 20.00%',
                'K : 60.00%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Tikamgarh',
              nutrients: [
                'N : 14.64%',
                'OC : 55.06%',
                'P : 21.77%',
                'K : 2.01%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Ujjain',
              nutrients: [
                'N : 97.62%',
                'OC : 29.17%',
                'P : 20.24%',
                'K : 1.79%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Umaria',
              nutrients: [
                'N : 71.83%',
                'OC : 69.72%',
                'P : 100.00%',
                'K : 0.70%',
              ],
              pH: 'Moderately alkaline',
            },
            {
              name: 'Vidisha',
              nutrients: [
                'N : 97.40%',
                'OC : 17.86%',
                'P : 78.00%',
                'K : 2.10%',
              ],
              pH: 'Moderately alkaline',
            },
          ],
        },
      ],
    });
  }

  changeState (event) {
    this.setState ({selectedState: event.target.value});
    this.setState ({
      districts: this.state.states.find (
        dis => dis.name === event.target.value
      ) === undefined
        ? ['select']
        : this.state.states.find (dis => dis.name === event.target.value)
            .districts,
    });
  }
  backgroundBro (n) {
    var sum = 0;
    n.map ((v, key) => {
      var num = 0, f = 0, deci = 0.1;
      for (var i = 0; i < v.length; i++) {
        if (v[i] <= '9' && v[i] >= '0') {
          if (f === 1) {
            num += deci * (v[i] - '0');
            deci *= 0.1;
          } else {
            num = num * 10 + (v[i] - '0');
          }
        }
        if (v[i] === '.') f = 1;
      }
      sum += num;
    });
    console.log (sum);

    this.state.sorce = sum > 300
      ? danger
      : sum > 200 ? warning : sum > 100 ? info : success;

    if (sum > 300) return 'danger';
    else if (sum > 200) return 'warning';
    else if (sum > 100) return 'info';
    else return 'success';
  }

  changeDistrict (event) {
    this.setState ({selectedDistrict: event.target.value});
    const stats = this.state.states.find (
      state => state.name === this.state.selectedState
    ) === undefined
      ? ''
      : this.state.states.find (
          state => state.name === this.state.selectedState
        ).districts;
    stats === ''
      ? console.log ()
      : this.setState ({
          pH: stats.find (stat => stat.name === event.target.value).pH,
          nutrients: stats.find (stat => stat.name === event.target.value)
            .nutrients,
          bg: this.backgroundBro (
            stats.find (stat => stat.name === event.target.value).nutrients
          ),
        });
  }

  chooseColor (v) {
    if (v === undefined) return 'dark';
    var num = 0, f = 0, deci = 0.1;

    for (var i = 0; i < v.length; i++) {
      if (v[i] <= '9' && v[i] >= '0') {
        if (f === 1) {
          num += deci * (v[i] - '0');
          deci *= 0.1;
        } else {
          num = num * 10 + (v[i] - '0');
        }
      }
      if (v[i] === '.') f = 1;
    }
    console.log (num + ' ' + v);
    if (num >= 98) return 'danger';
    else if (num >= 80) return 'warning';
    else if (num >= 40) return 'info';
    else return 'success';
  }
  render () {
    return (
      <div id="container">
        <div className="choose2">
          <label>
            <div className="heading">
              <strong>State</strong>
            </div>
          </label>

          <select
            placeholder="State"
            value={this.state.selectedState}
            onChange={this.changeState}
          >
            <option>--Choose State--</option>
            {this.state.states.map ((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        <div className="choose1">
          <label>
            <div className="heading">
              <strong>District</strong>
            </div>
          </label>

          <select
            placeholder="District"
            value={this.state.selectedDistrict}
            onChange={this.changeDistrict}
          >
            <option>--Choose District--</option>
            {this.state.districts.map ((e, key) => {
              return <option key={key}>{e.name}</option>;
            })}
          </select>
        </div>

        {/* <label>
            Soil Deficiency in terms of Nutrients in :
          </label> */}

        <div placeholder="Nutrients" className="card-of-result1">
          <Card border="info" bg={this.state.bg} className="result-card">
            <Card.Header>
              Soil <strong>Deficiency</strong> in terms of
              Nutrients in :
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {this.state.selectedState.includes ('Choose')
                  ? ''
                  : this.state.selectedState}
                <br />
                {this.state.selectedDistrict.includes ('Choose')
                  ? ''
                  : this.state.selectedDistrict}
              </Card.Title>
              <Card.Text>
                {this.state.nutrients.map ((e, key) => {
                  return <div key={key}>{e}</div>;
                })}
                <br />
                {this.state.nutrients.length === 0
                  ? ''
                  : this.state.pH === ''
                      ? 'pH data not avaible'
                      : 'pH is -> ' + this.state.pH}
                <br />
                {this.state.bg === 'light'
                  ? 'your results will come here '
                  : ''}
              </Card.Text>
            </Card.Body>
          </Card>

          <img
            src={this.state.sorce}
            alt="kuchBhi"
            style={{width: '640px', margin: '2%'}}
          />
          <br />
        </div>
        <Accordion className="fix-accordion">
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Card.Header}
                variant="link"
                eventKey="1"
                className="suggest"
              >
                Check me out for some basic{' '}
                <strong>Causes</strong> for this condition.
                <span
                  style={{
                    position: 'absolute',
                    right: '40px',
                  }}
                >
                  &#10010;
                </span>

              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="card-solution">
                  <Card
                    border="dark"
                    bg={this.chooseColor (this.state.nutrients[0])}
                    className="card-of-result"
                  >
                    <Card.Header>
                      for <strong>Nitrogen </strong>{' '}
                      Deficiency:
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        Imbalance Is Caused By
                      </Card.Title>
                      <Card.Text>
                        {this.state.causes[0].Nitrogen[0].ImbalanceIsCausedBy}
                      </Card.Text>
                      <Card.Title>
                        Imbalance Causes
                      </Card.Title>
                      <Card.Text>
                        {this.state.causes[0].Nitrogen[1].ImbalanceCauses}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    border="dark"
                    bg={this.chooseColor (this.state.nutrients[3])}
                    className="card-of-result"
                  >
                    <Card.Header>
                      for <strong>Potassium </strong>{' '}
                      Deficiency:
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        Imbalance Is Caused By
                      </Card.Title>
                      <Card.Text>
                        {this.state.causes[1].Potassium[0].ImbalanceIsCausedBy}
                      </Card.Text>
                      <Card.Title>
                        Imbalance Causes
                      </Card.Title>
                      <Card.Text>
                        {this.state.causes[1].Potassium[1].ImbalanceCauses}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    border="dark"
                    bg={this.chooseColor (this.state.nutrients[2])}
                    className="card-of-result"
                  >
                    <Card.Header>
                      for <strong>Phosphorus </strong>{' '}
                      Deficiency:
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        Imbalance Is Caused By
                      </Card.Title>
                      <Card.Text>
                        {this.state.causes[2].Phosphorus[0].ImbalanceIsCausedBy}
                      </Card.Text>
                      <Card.Title>
                        Imbalance Causes
                      </Card.Title>
                      <Card.Text>
                        {this.state.causes[2].Phosphorus[1].ImbalanceCauses}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    border="dark"
                    bg={this.chooseColor (this.state.nutrients[1])}
                    className="card-of-result"
                  >
                    <Card.Header>
                      for <strong>Organic Carbon </strong>{' '}
                      Deficiency:
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        Imbalance Is Caused By
                      </Card.Title>
                      <Card.Text>
                        {
                          this.state.causes[3].OrganicCarbon[0]
                            .ImbalanceIsCausedBy
                        }
                      </Card.Text>
                      <Card.Title>
                        Imbalance Causes
                      </Card.Title>
                      <Card.Text>
                        {this.state.causes[3].OrganicCarbon[1].ImbalanceCauses}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    border="info"
                    bg={
                      this.state.pH.toLowerCase ().includes ('highly')
                        ? 'secondary'
                        : 'primary'
                      //this.state.pH.includes ('Highly') ? 'secondary' : 'primary'
                    }
                    className="card-of-result"
                  >
                    <Card.Header>
                      for{' '}
                      <strong> {this.state.pH} </strong>{' '}
                      pH:
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {this.state.pH.includes ('alkaline')
                          ? <div>
                              <Card.Title>
                                Imbalance Is Caused
                                By
                              </Card.Title>
                              <Card.Text>
                                {
                                  this.state.causes[4].pH.Alkaline[0]
                                    .ImbalanceIsCausedBy
                                }
                              </Card.Text>
                              <Card.Title>
                                Imbalance Causes
                              </Card.Title>
                              <Card.Text>
                                {
                                  this.state.causes[4].pH.Alkaline[1]
                                    .ImbalanceCauses
                                }
                              </Card.Text>
                            </div>
                          : <div>
                              <div>
                                <Card.Title>
                                  Imbalance Is
                                  Caused By
                                </Card.Title>
                                <Card.Text>
                                  {
                                    this.state.causes[4].pH.Acidic[0]
                                      .ImbalanceIsCausedBy
                                  }
                                </Card.Text>
                                <Card.Title>
                                  Imbalance Causes
                                </Card.Title>
                                <Card.Text>
                                  {
                                    this.state.causes[4].pH.Acidic[1]
                                      .ImbalanceCauses
                                  }
                                </Card.Text>
                              </div>
                            </div>}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Card.Header}
                variant="link"
                eventKey="0"
                className="suggest"
              >
                Check me out for some <strong>Solutions</strong>{' '}
                to improve this condition.
                <span
                  style={{
                    position: 'absolute',
                    right: '40px',
                  }}
                >
                  &#10010;
                </span>

              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div className="card-solution">
                  <Card
                    border="dark"
                    bg={this.chooseColor (this.state.nutrients[0])}
                    className="card-of-result"
                  >
                    <Card.Header>
                      for <strong>Nitrogen </strong>{' '}
                      Deficiency:
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        Organic Method
                      </Card.Title>
                      <Card.Text>
                        {
                          this.state.solutions[0].Nitrogen[0].OrganicMethod[
                            Math.floor (
                              this.state.solutions[0].Nitrogen[0].OrganicMethod
                                .length * Math.random ()
                            )
                          ]
                        }
                      </Card.Text>
                      <Card.Title>
                        Inorganic Method
                      </Card.Title>
                      <Card.Text>
                        {
                          this.state.solutions[0].Nitrogen[1].NonOrganicMethod[
                            Math.floor (
                              this.state.solutions[0].Nitrogen[1]
                                .NonOrganicMethod.length * Math.random ()
                            )
                          ]
                        }
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    border="dark"
                    bg={this.chooseColor (this.state.nutrients[3])}
                    className="card-of-result"
                  >
                    <Card.Header>
                      for <strong>Potassium </strong>{' '}
                      Deficiency:
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        Organic Method
                      </Card.Title>
                      <Card.Text>
                        {
                          this.state.solutions[1].Potassium[0].OrganicMethod[
                            Math.floor (
                              this.state.solutions[1].Potassium[0].OrganicMethod
                                .length * Math.random ()
                            )
                          ]
                        }
                      </Card.Text>
                      <Card.Title>
                        Inorganic Method
                      </Card.Title>
                      <Card.Text>
                        {
                          this.state.solutions[1].Potassium[1].InorganicMethod[
                            Math.floor (
                              this.state.solutions[1].Potassium[1]
                                .InorganicMethod.length * Math.random ()
                            )
                          ]
                        }
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    border="dark"
                    bg={this.chooseColor (this.state.nutrients[2])}
                    className="card-of-result"
                  >
                    <Card.Header>
                      for <strong>Phosphorus </strong>{' '}
                      Deficiency:
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        Organic Method
                      </Card.Title>
                      <Card.Text>
                        {
                          this.state.solutions[2].Phosphorus[0].OrganicMethod[
                            Math.floor (
                              this.state.solutions[2].Phosphorus[0]
                                .OrganicMethod.length * Math.random ()
                            )
                          ]
                        }
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    border="dark"
                    bg={this.chooseColor (this.state.nutrients[1])}
                    className="card-of-result"
                  >
                    <Card.Header>
                      for <strong>Organic Carbon </strong>{' '}
                      Deficiency:
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {
                          this.state.solutions[3].OrganicCarbon[
                            Math.floor (
                              this.state.solutions[3].OrganicCarbon.length *
                                Math.random ()
                            )
                          ]
                        }
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card
                    border="info"
                    bg={
                      this.state.pH.toLowerCase ().includes ('highly')
                        ? 'secondary'
                        : 'primary'
                      //this.state.pH.includes ('Highly') ? 'secondary' : 'primary'
                    }
                    className="card-of-result"
                  >
                    <Card.Header>
                      for{' '}
                      <strong> {this.state.pH} </strong>{' '}
                      pH:
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {this.state.pH.includes ('alkaline')
                          ? this.state.solutions[4].pH.Alkaline
                          : this.state.solutions[4].pH.Acidic}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Card.Header}
                variant="link"
                eventKey="2"
                className="suggest"
              >
                Check me out for some <strong>Games</strong> to
                learn many things.
                <span
                  style={{
                    position: 'absolute',
                    right: '40px',
                  }}
                >
                  &#10010;
                </span>

              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Link
                  to="/NitrogenGame"
                  className="btn btn-primary"
                  style={{margin: '20px'}}
                >
                  Nitrogen Game
                </Link>
                <Link
                  to="/PhosphorusGame"
                  className="btn btn-primary"
                  style={{margin: '20px'}}
                >
                  Phosphorus Game
                </Link>

                <Link
                  to="/Po"
                  className="btn btn-primary"
                  style={{margin: '20px'}}
                >
                  Potassium Game
                </Link>

                <Link
                  to="/SnakeGame"
                  className="btn btn-primary"
                  style={{margin: '20px'}}
                >
                  Worm Game
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Card.Header}
                variant="link"
                eventKey="3"
                className="suggest"
              >
                Check me out for some <strong>more</strong> and{' '}
                <strong>indepth </strong> knowledge about{' '}
                <strong>causes </strong>
                and <strong>Solutions</strong>{' '}
                <span
                  style={{
                    position: 'absolute',
                    right: '40px',
                  }}
                >
                  &#10010;
                </span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <Link to="/blogs" className="btn btn-primary">
                  Blogs
                </Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <img src={indiaMap} alt="India" className="IndiaMap" />
      </div>
    );
    // </div>
  }
}

export default DataDropDown;
