import React, {Component} from 'react';
import './FunFacts.css';
import {Button, Popover, OverlayTrigger} from 'react-bootstrap';

class FunFacts extends Component {
  state = {
    facts: {
      FactsOnSoil: [
        'There are more micro-organisms in a handful of soil than there are people on earth.',
        'It takes 500 years to produce just under an inch of topsoil, this is the most productive layer of soil.',
        'Soil is a living system.',
        'It provides all the nutrients required for successful plant growth.',
        'Soil consists of 45% minerals, 25% water, 25% air & 5% organic matter for good garden soil. Uncultivated soil tends to be 3% organic matter.',
        'As already mentioned 50% is air and water, the other 50% is broken rock and decaying plants and animals.',
        'Improving productivity',
        'Approximately 10% of the world’s carbon dioxide emissions are stored in soil.',
        'It greatly reduces flood risk by storing up to 9200 tonnes of water per acre. In total that’s about 0.01% of the Earth’s total water.',
        'Soil acts as a filter for underground water, filtering out pollutants.',
        'The amount of sand, clay and silt is what gives different soil types their various textures. Most soils are a mix of all three.',
        'Soil has 6 layers called horizons O, A, E, B, C and R. Horizon O is the topsoil and R is bedrock.',
        'Worms enrich topsoil by feeding on organic material in the soil and converting it into nutrients for plants. As they move through the soil it becomes more absorbent and better aerated too.',
        'Soil is at the bottom of the food chain, yet it is the cornerstone of life on earth.',
        'Soil stores water: A one  percent  increase in organic matter in the top six inches of soil would hold approximately 27,000 gallons of additional water per acre',
        'Soil mismanagement has contributed to climate change: The world’s soils have lost between 50-70% of their original carbon stock, much of which has been released into the atmosphere as carbon dioxide.',
        'Soil is in trouble: The Food and Agriculture Organization of the United Nations (FAO) estimated that 33% of soil is moderately to highly degraded through erosion, salinization, compaction, acidification, chemical pollution and nutrient depletion, hampering soils’ function and affecting food production.',
        'Soil that is not covered with vegetative matter is vulnerable: Soil is being swept and washed away 10 to 40 times faster than it is being replenished',
        'We can rebuild carbon stocks in the soil: A considerable part of the depleted soil organic carbon (SOC) pool can be restored through conversion of marginal lands into restorative land uses, adoption of conservation tillage with cover crops and crop residue mulch, nutrient cycling including the use of compost and manure, and other systems of sustainable management of soil and water resources.',
      ],

      BenefitsOfPesticides: [
        'Pesticides help farmers to produce more with less land',
        'Pesticides ensure bountiful harvests.',
        'Improving productivity',
        'Protection of crop losses/yield reduction',
        'Vector disease control',
        'Quality of food',
        'Pesticides help keep food affordable.',
        'Pesticides help reduce waterborne and insect transmitted diseases.',
        'Pesticides help conserve the environment.',
        'Herbicides have removed the hardship of hand weeding.',
        'Pesticides have transformed developing countries into food producers.',
        'Securing what’s in storage.',
      ],

      HarmfulPesticides: [
        'An entire class of pesticides (organophosphates) has been linked to higher rates of ADHD in children.',
        'Pesticides can also affect groundwater by a process known as leeching.',
        'Another way pesticides can spread and cause potential harm is by volatilization. Volatilization occurs when a pesticide turns into a gas or vapor after it has been sprayed, allowing it to travel through the air and spread to different pieces of land.',
        'Pesticides are stored in your colon, where they slowly but surely poison the body.',
        'You may not realize this, but when you are eating a non-organic apple, you are also eating over 30 different pesticides that have been sprayed on the apple',
        "Although one piece of fruit with pesticides won't kill you, if they build up in your body, they can be potentially detrimental to your health and should be avoided as much as possible",
        'Strawberries, apples, carrots, celery, spinach, grapes, apples, cucumbers are just a few types of food that you should not eat if they are not organic because the pesticide level is the highest on them.',
        "After countless studies, pesticides have been linked to cancer, Alzheimer's Disease, ADHD, and even birth defects. Pesticides also have the potential to harm the nervous system, the reproductive system, and the endocrine system.",
      ],

      Fertilizers: [
        'Organic fertilizers are made from natural and organic materials—mainly manure, compost, or other animal and plant products.',
        'Nitrogen is a plan nutrient responsible for growth. This ingredient is useful in fertilizers, particularly during the middle stages of a plant’s lifespan, when it needs encouragement to continue to grow large and stem new leaves.',
        'Phosphorous is a nutrient that plants need continuously. Throughout their lifecycle, phosphorus helps to strengthen the root system and stems of a plant. ',
        'Potassium will help your plants to grow deeper and stronger roots. It can also help protect your plants from harm when they are deprived of other nutrients.',
        'If there is a potassium deficiency in your plant, you may see yellowing or browning on the edges of leaves.',
        'The use of chemical fertilizers on crops can have adverse effects on waterways caused by chemical run off of the excess fertilizer.',
        'Over-application of chemical fertilizer to plants may cause the leaves to turn yellow or brown, damaging the plant and reducing crop yield. This condition is known as chemical leaf scorch.',
        'Excess nitrogen used in crop fertilization can contribute to the release of greenhouse gases such as carbon dioxide and nitrous oxide into the atmosphere',
        'The overuse of chemical fertilizers can lead to soil acidification because of a decrease in organic matter in the soil',
        'Nitrogen applied to fields in large amounts over time damages topsoil, resulting in reduced crop yields.',
        'Sandy soils are much more prone to soil acidification than are clay soils.',
        'Clay soils have an ability to buffer the effects of excess chemical fertilization.',
        'There is an increasing concern that continuous use of chemical fertilizers on soil depletes the soil of essential nutrients.',
      ],

      Others: [
        'Agricultural activities are the reason for a significant percent of the land pollution. That would be anything related to fertilizing, using pesticides, irrigation and improper disposal of animal waste.',
        'Up to 98% of the herbicides and 95% of the pesticides end up at the topsoil and then go even deeper. That reduces the biodiversity in the ground because of the reduction of organic matter inside leading to soil degradation.',
        'Every year in India, pests and diseases eat away, on an average, 20-30% of food, worth about Rs. 45000 crore, produced by the farmers. Pesticides are also useful in health programmes for controlling vectors, responsible for diseases like malaria.',
        'In India, spurious pesticides constitute 25 % of the pesticide market.',
        'Worms tunnel deeply in the soil and bring subsoil closer to the surface mixing it with the topsoil. Slime, a secretion of earthworms, contains nitrogen. Nitrogen is an important nutrient for plants. The sticky slime helps to hold clusters of soil particles together in formations 	called aggregates',
        'Worms help to increase the amount of air and water that gets into the soil. They break down organic matter, like leaves and grass into things that plants can use. When they eat, they leave behind castings that are a very valuable type of fertilizer. Earthworms are like free farm help.',
      ],

      DeterminantsOfHealthySoil: [
        'Soil is a living entity. It is full of life. The weight of living organisms in a healthy soil is about 5 ton per hectare.',
        'Soil organic matter content is an indicator of soil health, and it is about 2.5% to 3.0 % by weight in the root zone (top 20 cm).',
        'Soil organic matter content in most cropland soils of north western India and elsewhere is often less than 0.5%.',
      ],
    },
    options: [
      '"Fact On Soil"',
      '"Determinants Of HealthySoil"',
      '"Some Random Fact"',
      '"Fertilizers"',
      '"Harmful Pesticides"',
      '"Benefits Of Pesticides"',
    ],
  };

  popover1 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        {this.state.options[0]}
      </Popover.Title>
      <Popover.Content>
        {
          this.state.facts.FactsOnSoil[
            Math.floor (Math.random () * this.state.facts.FactsOnSoil.length)
          ]
        }

      </Popover.Content>
    </Popover>
  );
  popover2 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        {this.state.options[1]}
      </Popover.Title>
      <Popover.Content>
        {
          this.state.facts.DeterminantsOfHealthySoil[
            Math.floor (
              Math.random () * this.state.facts.DeterminantsOfHealthySoil.length
            )
          ]
        }

      </Popover.Content>
    </Popover>
  );

  popover3 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        {this.state.options[2]}
      </Popover.Title>
      <Popover.Content>
        {
          this.state.facts.Others[
            Math.floor (Math.random () * this.state.facts.Others.length)
          ]
        }

      </Popover.Content>
    </Popover>
  );

  popover4 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        {this.state.options[3]}
      </Popover.Title>
      <Popover.Content>
        {
          this.state.facts.Fertilizers[
            Math.floor (Math.random () * this.state.facts.Fertilizers.length)
          ]
        }

      </Popover.Content>
    </Popover>
  );

  popover5 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        {this.state.options[4]}
      </Popover.Title>
      <Popover.Content>
        {
          this.state.facts.HarmfulPesticides[
            Math.floor (
              Math.random () * this.state.facts.HarmfulPesticides.length
            )
          ]
        }

      </Popover.Content>
    </Popover>
  );

  popover6 = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">
        {this.state.options[5]}
      </Popover.Title>
      <Popover.Content>
        {
          this.state.facts.BenefitsOfPesticides[
            Math.floor (
              Math.random () * this.state.facts.BenefitsOfPesticides.length
            )
          ]
        }

      </Popover.Content>
    </Popover>
  );

  renderSwitch (val) {
    switch (val) {
      case 0:
        return this.popover6;

      case 1:
        return this.popover2;
      case 2:
        return this.popover3;

      case 3:
        return this.popover4;
      case 4:
        return this.popover5;
      default:
        return this.popover1;
    }
  }
  render () {
    return (
      <div className="FunFacts">

        <OverlayTrigger
          placement="bottom"
          overlay={this.renderSwitch (Math.floor (Math.random () * 6))}
        >
          <Button variant="danger" style={{margin: '1rem'}}>
            Wanna Know A Fun Fact !!!
          </Button>
        </OverlayTrigger>

      </div>
    );
  }
}

export default FunFacts;
