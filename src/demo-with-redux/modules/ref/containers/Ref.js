/** @flow */
import React, {Component} from "react"
import {FlatList} from "react-native"
import {Button} from "antd-mobile-rn"


const refs = [
  {
    route: 'RefFlex',
    name: 'Flex Flex布局',
  },
  {
    route: 'RefWingBlank',
    name: 'WingBlank 两翼留白',
  },
  {
    route: 'RefWhiteSpace',
    name: 'WhiteSpace 上下留白',
  },
  {
    route: 'RefPopover',
    name: 'Popover 气泡',
  },
  {
    route: 'RefPagination',
    name: 'Pagination 分页器',
  },
  {
    route: 'RefSegmentedControl',
    name: 'SegmentedControl 分段器',
  },
  {
    route: 'RefTabs',
    name: 'Tabs 标签页',
  },
  {
    route: 'RefButton',
    name: 'Button 按钮',
  },
  {
    route: 'RefCheckbox',
    name: 'Checkbox 复选框',
  },
  {
    route: 'RefDatePicker',
    name: 'DatePicker 日期选择',
  },
  {
    route: 'RefDatePickerView',
    name: 'DatePickerView 选择器',
  },
  {
    route: 'RefInputItem',
    name: 'InputItem 文本输入',
  },
  {
    route: 'RefPickerView',
    name: 'PickerView 选择器',
  },
  {
    route: 'RefRadio',
    name: 'Radio 单选框',
  },
  {
    route: 'RefSwitch',
    name: 'Switch 滑动开关',
  },
  {
    route: 'RefSearchBar',
    name: 'SearchBar 搜索栏',
  },
  {
    route: 'RefSlider',
    name: 'Slider 滑动输入条',
  },
  {
    route: 'RefStepper',
    name: 'Stepper 步进器',
  },
  {
    route: 'RefTextareaItem',
    name: 'TextareaItem 多行输入',
  },
  {
    route: 'RefAccordion',
    name: 'Accordion 手风琴',
  },
  {
    route: 'RefBadge',
    name: 'Badge 徽标数',
  },
  {
    route: 'RefCarousel',
    name: 'Carousel 走马灯',
  },
  {
    route: 'RefCard',
    name: 'Card 卡片',
  },
  {
    route: 'RefGrid',
    name: 'Grid 宫格',
  },
  {
    route: 'RefList',
    name: 'List 列表',
  },
  {
    route: 'RefNoticeBar',
    name: 'NoticeBar 通告栏',
  },
  {
    route: 'RefSteps',
    name: 'Steps 步骤条',
  },
  {
    route: 'RefTag',
    name: 'Tag 标签',
  },
  {
    route: 'RefActionSheet',
    name: 'ActionSheet 动作面板',
  },
  {
    route: 'RefActivityIndicator',
    name: 'ActivityIndicator 活动指示器',
  },
  {
    route: 'RefModal',
    name: 'Modal 对话框',
  },
  {
    route: 'RefProgress',
    name: 'Progress 进度条',
  },
  {
    route: 'RefToast',
    name: 'Toast 轻提示',
  },
  {
    route: 'RefSwipeAction',
    name: 'SwipeAction 滑动操作',
  },
  {
    route: 'RefResult',
    name: 'Result 结果页',
  },
];

class Ref extends Component<any, any> {

  _onPressItem = (route: string) => {
    this.props.navigation.navigate(route);
  };

  _keyExtractor = (item) => item.route;

  _renderItem = ({item}) => (
    <Button type = 'ghost' onClick={() => this._onPressItem(item.route)}>
      {item.name}
    </Button>
  );

  render() {
    return (
      <FlatList
        data = {refs}
        keyExtractor = {this._keyExtractor}
        renderItem = {this._renderItem}
      />
    );
  }
}

export default Ref;
