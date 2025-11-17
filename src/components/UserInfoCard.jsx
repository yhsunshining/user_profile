// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
// @ts-ignore;
import { User, Crown, Star } from 'lucide-react';

export function UserInfoCard({
  user
}) {
  const getUserTypeColor = type => {
    switch (type) {
      case 'vip':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'premium':
        return 'bg-gradient-to-r from-purple-400 to-pink-500';
      default:
        return 'bg-gradient-to-r from-blue-400 to-cyan-500';
    }
  };
  const getUserTypeText = type => {
    switch (type) {
      case 'vip':
        return 'VIP会员';
      case 'premium':
        return '高级会员';
      default:
        return '普通用户';
    }
  };
  return <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                <AvatarImage src={user?.avatarUrl} alt={user?.name} />
                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-purple-500 text-white text-xl font-bold">
                  {user?.name?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>
              <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full ${getUserTypeColor(user?.type)} flex items-center justify-center`}>
                {user?.type === 'vip' ? <Crown className="w-3 h-3 text-white" /> : user?.type === 'premium' ? <Star className="w-3 h-3 text-white" /> : <User className="w-3 h-3 text-white" />}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                {user?.nickName || user?.name || '用户'}
              </h2>
              <p className="text-gray-600 mb-2">{user?.name}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium ${getUserTypeColor(user?.type)}`}>
                {getUserTypeText(user?.type)}
              </span>
            </div>
          </div>
        </div>;
}