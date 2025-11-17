// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ShoppingBag, Coins, Award, TrendingUp } from 'lucide-react';

export function StatsCard({
  stats
}) {
  const statItems = [{
    icon: ShoppingBag,
    label: '订单数',
    value: stats?.orders || 0,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  }, {
    icon: Coins,
    label: '积分余额',
    value: stats?.points || 0,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  }, {
    icon: Award,
    label: '会员等级',
    value: stats?.level || 'Lv.1',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }, {
    icon: TrendingUp,
    label: '成长值',
    value: stats?.growth || 0,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }];
  return <div className="grid grid-cols-2 gap-4 mb-6">
          {statItems.map((item, index) => {
      const IconComponent = item.icon;
      return <div key={index} className="bg-white rounded-xl shadow-md p-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${item.bgColor}`}>
                    <IconComponent className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{item.label}</p>
                    <p className="text-xl font-bold text-gray-800">{item.value}</p>
                  </div>
                </div>
              </div>;
    })}
        </div>;
}