
import { ModuleContentItem } from "@/lib/modules-data";

export const introToClimateChange: ModuleContentItem[] = [
  {
    type: 'reading',
    title: 'What Is Climate Change?',
    content: `
      <h2>The Earth's Climate is Changing</h2>
      <p>Climate change refers to long-term shifts in temperatures and weather patterns. While these shifts can be natural, such as through variations in the solar cycle, human activities have been the main driver of climate change since the 1800s, primarily due to the burning of fossil fuels like coal, oil, and gas.</p>
      
      <h3>The Greenhouse Effect</h3>
      <p>Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun’s heat and raising temperatures. The main greenhouse gases that are causing climate change include carbon dioxide (CO₂) and methane.</p>
      <p>These gases come from using gasoline for driving a car or coal for heating a building, for example. Clearing land and cutting down forests can also release carbon dioxide. Agriculture, oil and gas operations are major sources of methane emissions. Energy, industry, transport, buildings, agriculture and land use are among the main sectors causing greenhouse gases.</p>
      
      <h3>Key Terms to Know:</h3>
      <ul>
        <li><strong>Global Warming:</strong> The long-term heating of Earth’s climate system observed since the pre-industrial period (between 1850 and 1900) due to human activities.</li>
        <li><strong>Greenhouse Gas (GHG):</strong> A gas that absorbs and emits radiant energy within the thermal infrared range, causing the greenhouse effect.</li>
        <li><strong>Fossil Fuels:</strong> Combustible geologic deposits of organic materials, formed from decayed plants and animals that have been converted to crude oil, coal, natural gas, or heavy oils by exposure to heat and pressure in the earth's crust over hundreds of millions of years.</li>
      </ul>
    `
  },
  {
    type: 'activity',
    title: 'Interactive Activity: Your Carbon Footprint',
    content: 'CarbonFootprintCalculator'
  },
  {
    type: 'quiz',
    title: 'Knowledge Check: Causes of Climate Change',
    content: [
      {
        question: 'What is the main driver of climate change since the 1800s?',
        options: ['Volcanic eruptions', 'Changes in the sun\'s intensity', 'Human activities burning fossil fuels', 'Natural forest fires'],
        answer: 'Human activities burning fossil fuels'
      },
      {
        question: 'Which of the following is a major greenhouse gas?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide (CO₂)', 'Argon'],
        answer: 'Carbon Dioxide (CO₂)'
      },
      {
        question: 'What does the "greenhouse effect" describe?',
        options: ['Plants growing faster in a greenhouse', 'Gases trapping the sun’s heat in the atmosphere', 'The Earth tilting on its axis', 'The reflection of sunlight back into space'],
        answer: 'Gases trapping the sun’s heat in the atmosphere'
      },
      {
        question: 'Which of these is NOT a primary source of methane emissions?',
        options: ['Oil and gas operations', 'Agriculture', 'Oceans', 'Landfills'],
        answer: 'Oceans'
      },
      {
        question: 'What is a "fossil fuel"?',
        options: ['A type of renewable energy', 'Fuel made from recently living organisms', 'Energy from the sun', 'Combustible material made from decayed plants and animals over millions of years'],
        answer: 'Combustible material made from decayed plants and animals over millions of years'
      }
    ]
  }
];
