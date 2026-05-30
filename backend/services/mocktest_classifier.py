# services/mocktest_classifier.py
import json
import random
from typing import List, Dict
import os

class MockTestClassifier:
    def __init__(self):
        self.questions_data = []
        self.load_questions()
    
    def load_questions(self):
        """Load questions from mocktest_questions.json"""
        try:
            with open("data/mocktest_questions.json", 'r', encoding='utf-8') as f:

                self.questions_data = json.load(f)
        except FileNotFoundError:
            print("Warning: mocktest_questions.json not found")
            self.questions_data = []
    
    def get_dynamic_questions(self, user_id: str = None) -> Dict[str, List[Dict]]:
        """
        Use ML-like logic to dynamically select questions:
        - 10 aptitude questions
        - 10 technical questions
        - Balanced difficulty and subcategories
        """
        if not self.questions_data:
            return {"aptitude": [], "technical": []}
        
        # Separate questions by category
        aptitude_questions = [q for q in self.questions_data if q.get("category") == "aptitude"]
        technical_questions = [q for q in self.questions_data if q.get("category") == "technical"]
        
        # ML-like selection: balance subcategories and ensure variety
        selected_aptitude = self._select_balanced_questions(aptitude_questions, 20, "aptitude")
        selected_technical = self._select_balanced_questions(technical_questions, 20, "technical")
        
        return {
            "aptitude": selected_aptitude,
            "technical": selected_technical
        }
    
    def _select_balanced_questions(self, questions: List[Dict], count: int, category: str) -> List[Dict]:
        """Select balanced questions across subcategories"""
        if not questions:
            return []
        
        # Group by subcategory
        subcategory_map = {}
        for q in questions:
            subcat = q.get("subcategory", "general")
            if subcat not in subcategory_map:
                subcategory_map[subcat] = []
            subcategory_map[subcat].append(q)
        
        # Calculate questions per subcategory
        selected = []
        subcategories = list(subcategory_map.keys())
        
        if len(subcategories) <= count:
            # Distribute evenly
            per_subcat = max(1, count // len(subcategories))
            remaining = count % len(subcategories)
            
            for subcat in subcategories:
                available = subcategory_map[subcat]
                take_count = min(per_subcat + (1 if remaining > 0 else 0), len(available))
                selected.extend(random.sample(available, take_count))
                if remaining > 0:
                    remaining -= 1
        else:
            # Select from most diverse subcategories
            selected = random.sample(questions, min(count, len(questions)))
        
        # Shuffle final selection
        random.shuffle(selected)
        return selected[:count]
    
    def get_question_stats(self) -> Dict[str, int]:
        """Get statistics about available questions"""
        if not self.questions_data:
            return {"aptitude": 0, "technical": 0}
        
        aptitude_count = len([q for q in self.questions_data if q.get("category") == "aptitude"])
        technical_count = len([q for q in self.questions_data if q.get("category") == "technical"])
        
        return {
            "aptitude": aptitude_count,
            "technical": technical_count,
            "total": len(self.questions_data)
        }
