
import { ModuleContentItem } from "@/lib/modules-data";

export const wasteManagementContent: ModuleContentItem[] = [
  {
    type: 'reading',
    title: 'The Journey of Waste',
    content: `
      <h2>Where Does Your Trash Go?</h2>
      <p>Have you ever wondered what happens to your trash after you throw it away? It doesn't just disappear. Every item we dispose of goes on a journey. Understanding this journey is the first step toward managing our waste more responsibly.</p>
      
      <h3>The Three Main Streams:</h3>
      <ul>
        <li><strong>Landfill:</strong> This is where most of our general waste ends up. It's a large, designated area where trash is buried. Landfills can cause soil and water pollution and release methane, a powerful greenhouse gas.</li>
        <li><strong>Recycling:</strong> This is the process of converting waste materials into new materials and objects. Items like paper, cardboard, plastic bottles, glass jars, and metal cans can be recycled. Recycling conserves natural resources, saves energy, and reduces pollution.</li>
        <li><strong>Composting:</strong> Organic waste, such as food scraps and yard trimmings, can be broken down naturally into a rich soil amendment called compost. Composting reduces the amount of waste going to landfills and creates a valuable product for gardens and farms.</li>
      </ul>
      <p>By correctly sorting our waste, we can divert a huge amount of material from landfills, turning what was once "trash" into a valuable resource.</p>
    `
  },
  {
    type: 'activity',
    title: 'Interactive Activity: Waste Sorting Challenge',
    content: 'WasteSortingGame'
  },
  {
    type: 'quiz',
    title: 'Knowledge Check: Waste Management',
    content: [
      {
        question: 'What is the main environmental concern with landfills?',
        options: ['They are too small', 'They release methane, a greenhouse gas', 'They smell nice', 'They generate electricity'],
        answer: 'They release methane, a greenhouse gas'
      },
      {
        question: 'Which of the following items is generally NOT recyclable?',
        options: ['Plastic water bottle', 'Newspaper', 'Greasy pizza box', 'Aluminum can'],
        answer: 'Greasy pizza box'
      },
      {
        question: 'What is the product of composting?',
        options: ['Plastic pellets', 'Clean water', 'Rich soil amendment', 'Natural gas'],
        answer: 'Rich soil amendment'
      },
      {
        question: 'What does "recycling" mean?',
        options: ['Throwing everything in one bin', 'Burying trash underground', 'Burning waste for energy', 'Converting waste materials into new objects'],
        answer: 'Converting waste materials into new objects'
      }
    ]
  }
];
