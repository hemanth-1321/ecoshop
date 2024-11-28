import * as vader from "vader-sentiment";

export const analyzeSentiment = (content: string) => {
  // Perform sentiment analysis using Vader SentimentIntensityAnalyzer
  const sentimentResult =
    vader.SentimentIntensityAnalyzer.polarity_scores(content);

  // Determine the sentiment label based on the compound score
  let sentimentLabel = "Neutral";
  if (sentimentResult.compound >= 0.05) {
    sentimentLabel = "Positive";
  } else if (sentimentResult.compound <= -0.05) {
    sentimentLabel = "Negative";
  }

  return {
    positiveScore: sentimentResult.pos,
    negativeScore: sentimentResult.neg,
    neutralScore: sentimentResult.neu,
    compoundScore: sentimentResult.compound,
    sentimentLabel,
  };
};
