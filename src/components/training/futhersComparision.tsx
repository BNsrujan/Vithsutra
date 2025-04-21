'use client';

import { Check, X } from 'lucide-react';

const CheckIcon = () => <Check className="w-4 h-4 text-green-600" />;
const CrossIcon = () => <X className="w-4 h-4 text-red-500" />;

const features = [
  'Intro to Robotics & Industry Applications',
  'Types of Robots',
  'Motion Basics',
  'Grippers Demo',
  'IRC Software (Basic)',
  'Soft Skills Session',
  'Career & Quiz Recap',
  'Motion Programming',
  'UR Robot + URScript',
  'IRC (Advanced)',
  'Pick, Rotate, Tool Actions',
  'Safety & Real Demos',
  'ROS Architecture',
  'Sensor Integration',
  'Branch-wise Final Projects',
  'Guaranteed Internship',
  'Industrial Tour',
  'Tech Portfolio + Certification',
];

const plans = {
  'Basic Model': [
    true, true, true, true, true, true, true,
    false, false, false, false, false,
    false, false, false, false, false, false
  ],
  'Advanced Model': [
    true, true, true, true, true, true, true,
    true, true, true, true, true,
    false, false, false, false, false, false
  ],
  'Master Model': Array(features.length).fill(true),
};

export default function ComparisonTable() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Model Comparison</h2>
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                <th className="text-left p-3 border-r">Feature</th>
                {Object.keys(plans).map((plan, idx) => (
                  <th key={idx} className="p-3 text-center border-r">{plan}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-t bg-white hover:bg-gray-50">
                  <td className="p-3 border-r text-gray-700">{feature}</td>
                  {Object.values(plans).map((planValues, i) => (
                    <td key={i} className="p-3 text-center border-r">
                      {planValues[idx] ? <CheckIcon /> : <CrossIcon />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
