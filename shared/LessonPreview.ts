export interface LessonPreview {
  id: string;
  shortDescription: string;
  avatarUrl: string;
  category: 'Reading' | 'Listning' | 'Conversation' | 'Quiz';
  unitTitle: string;
  lessonTitle: string;
}

export default LessonPreview;
