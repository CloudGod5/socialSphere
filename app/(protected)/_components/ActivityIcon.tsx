import SvgArrowReply from '@/components/svg/ArrowReply';
import SvgAtSign from '@/components/svg/AtSign';
import SvgComment from '@/components/svg/Comment';
import SvgHeart from '@/components/svg/Heart';
import SvgProfile from '@/components/svg/Profile';
import { ActivityType } from '@prisma/client';

const CreateFollowNotificationIcon = () => (
  <div className="absolute -bottom-2 right-0 rounded-full bg-gradient-to-r from-pink-400 to-red-500 p-2">
    <SvgProfile width={18} height={18} stroke="white" />
  </div>
);
const LikeNotificationIcon = () => (
  <div className="absolute -bottom-2 right-0 rounded-full bg-gradient-to-r from-violet-400 to-violet-500 p-2">
    <SvgHeart width={18} height={18} stroke="white" />
  </div>
);
const MentionNotificationIcon = () => (
  <div className="absolute -bottom-2 right-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-2">
    <SvgAtSign width={18} height={18} stroke="white" />
  </div>
);
const CreateCommentNotificationIcon = () => (
  <div className="absolute -bottom-2 right-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 p-2">
    <SvgComment width={18} height={18} stroke="white" />
  </div>
);
const CreateReplyNotificationIcon = () => (
  <div className="absolute -bottom-2 right-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 p-2">
    <SvgArrowReply width={18} height={18} stroke="white" />
  </div>
);

const ActivityIcons = {
  CREATE_FOLLOW: () => <CreateFollowNotificationIcon />,

  POST_LIKE: () => <LikeNotificationIcon />,
  POST_MENTION: () => <MentionNotificationIcon />,

  CREATE_COMMENT: () => <CreateCommentNotificationIcon />,
  COMMENT_LIKE: () => <LikeNotificationIcon />,
  COMMENT_MENTION: () => <MentionNotificationIcon />,

  CREATE_REPLY: () => <CreateReplyNotificationIcon />,
  REPLY_LIKE: () => <LikeNotificationIcon />,
  REPLY_MENTION: () => <MentionNotificationIcon />,
};

export function ActivityIcon({ type }: { type: ActivityType }) {
  return <>{ActivityIcons[type]()}</>;
}