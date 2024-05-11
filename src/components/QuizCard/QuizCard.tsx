import React from 'react';
import styles from './QuizCard.module.css'; // Path to your CSS module
import { Book } from 'lucide-react'; // Import the book icon from lucide-react
import Button from "@/components/patterns/Button/Button";
import { useRouter } from 'next/navigation'
import { formatScore } from '@/utils/text'
interface QuizCardProps {
    quizId: string;
    quizName: string;
    createdAt: Date;
    quizScore: number;
    started: boolean;
    completed: boolean;
    questionsTotal: number | null;
    questionsCompleted: number;
    courseName?: string;
    quizState?: string;
}

const QuizCard: React.FC<QuizCardProps> = ({
    quizId,
    quizName,
    createdAt,
    quizScore,
    started,
    completed,
    questionsTotal,
    questionsCompleted,
    courseName = null,
    quizState = "",
}) => {
    const router = useRouter();

    const quizButtonState = completed ? "completed" : started ? "inProgress" : "notStarted";

    let buttonText = "";
    if (quizButtonState == "completed") {
        buttonText = "Review";
    } else if (quizButtonState == "inProgress") {
        buttonText = "Continue";
    } else {
        buttonText = "Start Challenge";
    }

    // const progressText = `Progress: ${questionsCompleted}/${questionsTotal}`;

    // Format the createdAt date
    const createdAtDate = new Date(createdAt);

    const day = createdAtDate.getDate(); // Day as a number
    // Determine the correct format for the month based on its length
    const monthFormat = createdAtDate.toLocaleString('en-US', { month: 'short' }).length <= 4 ? 'short' : 'narrow';
    const month = createdAtDate.toLocaleString('en-US', { month: monthFormat }); // Month as a short name
    const year = createdAtDate.getFullYear().toString().slice(-2); // Last two digits of the year

    const formattedcreatedAt = `${day} ${month} '${year}`;

    // Create a new date object for 20 minutes later
    const newDate = new Date(createdAtDate);
    newDate.setMinutes(newDate.getMinutes() + 10);
    const formattedNewDate = newDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    const handleButtonClick = () => {

        router.push(`/quiz/${quizId}`);
    };

    return (
        <div className={styles.card}>
            <div className={styles.iconContainer}>
                <Book size={48} className={styles.bookIcon} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.quizName}>{quizName}</h3>
                {(quizState === "processing") ? (
                    <div>
                        <p className={styles.processing}>Your quiz is being created. It should be ready by {formattedNewDate}</p>
                    </div>
                ) : (<div>
                    <p className={styles.createdAt}>Created on {formattedcreatedAt}</p>
                    {quizButtonState === "completed" ? <p className={styles.quizScore}>Quiz Score: {formatScore(quizScore)}</p> : null}
                    {/* {quizState === "inProgress" ? <p className={styles.progress}>{progressText}</p> : null} */}
                </div>)}
            </div>
            {(quizState === "processing") ? null:
            <div className={styles.buttonContainer}>
                <Button
                    variant="secondary"
                    label={buttonText}
                    onClick={handleButtonClick}
                />
            </div>}

        </div>
    );
};

export default QuizCard;
