# routes/mocktest_routes.py
from fastapi import APIRouter, HTTPException
from services.mocktest_classifier import MockTestClassifier
from typing import Dict, List

router = APIRouter(prefix="/api/mocktest", tags=["mocktest"])

# Initialize classifier
classifier = MockTestClassifier()

@router.get("/questions")
async def get_mocktest_questions(user_id: str = None) -> Dict[str, List[Dict]]:
    """
    Get dynamically selected mock test questions using ML classification
    Returns 10 aptitude questions and 10 technical questions
    """
    try:
        questions = classifier.get_dynamic_questions(user_id)
        return questions
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/stats")
async def get_question_stats() -> Dict[str, int]:
    """Get statistics about available questions"""
    try:
        stats = classifier.get_question_stats()
        return stats
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/categories")
async def get_categories() -> Dict[str, List[str]]:
    """Get available question categories and subcategories"""
    try:
        if not classifier.questions_data:
            return {"categories": [], "subcategories": {}}
        
        categories = set()
        subcategories = {}
        
        for q in classifier.questions_data:
            cat = q.get("category")
            subcat = q.get("subcategory", "general")
            
            if cat:
                categories.add(cat)
                if cat not in subcategories:
                    subcategories[cat] = set()
                subcategories[cat].add(subcat)
        
        return {
            "categories": list(categories),
            "subcategories": {k: list(v) for k, v in subcategories.items()}
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
