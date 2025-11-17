// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { ShoppingBag, Settings, HelpCircle, Heart, MapPin, CreditCard, Bell, Shield, ChevronRight } from 'lucide-react';

export function MenuList({
  onMenuClick
}) {
  const menuItems = [{
    icon: ShoppingBag,
    label: '我的订单',
    description: '查看全部订单',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    action: 'orders'
  }, {
    icon: Heart,
    label: '我的收藏',
    description: '收藏的商品',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    action: 'favorites'
  }, {
    icon: MapPin,
    label: '收货地址',
    description: '管理收货地址',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    action: 'addresses'
  }, {
    icon: CreditCard,
    label: '支付方式',
    description: '管理支付方式',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    action: 'payment'
  }, {
    icon: Bell,
    label: '消息通知',
    description: '查看系统消息',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    action: 'notifications'
  }, {
    icon: Shield,
    label: '账户安全',
    description: '密码和安全设置',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    action: 'security'
  }, {
    icon: Settings,
    label: '设置',
    description: '应用设置',
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    action: 'settings'
  }, {
    icon: HelpCircle,
    label: '帮助中心',
    description: '常见问题',
    color: 'text-teal-600',
    bgColor: 'bg-teal-50',
    action: 'help'
  }];
  return <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {menuItems.map((item, index) => {
      const IconComponent = item.icon;
      return <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => onMenuClick(item.action)}>
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${item.bgColor}`}>
                    <IconComponent className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{item.label}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>;
    })}
        </div>;
}