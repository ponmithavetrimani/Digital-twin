from fastapi import APIRouter, HTTPException

from app.services.dashboard_service import get_dashboard_stats

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/{user_id}")
async def dashboard(user_id: str):
    """
    Get dashboard statistics for a user.
    """

    try:
        stats = get_dashboard_stats(user_id)
        return stats

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )