'use client';

import React from 'react';
import { resumeAnalysis } from './data';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import ProgressBar from '@/components/ui/progress-bar';
import Badge from '@/components/ui/badge';
import { motion } from 'motion/react';

const ResultPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="max-w-5xl mx-auto p-6 rounded shadow"
    >
      <TextGenerateEffect
        words="Resume Analysis Result"
        className="text-4xl text-center mb-8"
      />

      {/* Match Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">Match Score</span>
          <span className="font-mono text-lg">{resumeAnalysis.match_score}%</span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        >
          <ProgressBar value={resumeAnalysis.match_score} />
        </motion.div>
      </div>

      {/* Matched Skills */}
      <div className="mb-6">
        <span className="font-bold block mb-1">Matched Skills</span>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="flex flex-wrap gap-2"
        >
          {resumeAnalysis.matched_skills.map(skill => (
            <Badge color="green" key={skill}>
              {skill}
            </Badge>
          ))}
        </motion.div>
      </div>

      {/* Missing Skills */}
      <div className="mb-6">
        <span className="font-bold block mb-1">Missing Skills</span>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          className="flex flex-wrap gap-2"
        >
          {resumeAnalysis.missing_skills.map(skill => (
            <Badge color="red" key={skill}>
              {skill}
            </Badge>
          ))}
        </motion.div>
      </div>

      {/* Suggestions */}
      <div className="mb-6">
        <span className="font-bold block mb-1">Suggestions</span>
        <ul className="list-disc list-inside ml-4">
          {resumeAnalysis.suggestions.map(s => (
            <TextGenerateEffect key={s} words={s} className="mb-1 font-normal" />
          ))}
        </ul>
      </div>

      {/* Summary */}
      <div className="mt-4 p-4 rounded">
        <span className="font-bold block mb-1">Summary</span>
        <TextGenerateEffect
          words={resumeAnalysis.summary}
          className="mt-2 font-normal text-gray-500"
        />
      </div>
    </motion.div>
  );
};

export default ResultPage;
