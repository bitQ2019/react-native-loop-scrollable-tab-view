# React Native Scrollable Tab View Loopable

### inspired by react-native-loop-scrollable-tab-view

可循环滑动的tab view 控件。

``` js
<LoopScrollTabView
    renderTabBar={() => <TabBar />}
    >
    {data.map((item, index) => (
        <CategoryView
        key={item.id}
        actions={actions}
        index={index}
        navigation={navigation}
        selectedId={selectedId}
        subCategories={item.sub_category}
        tabLabel={item.name}
        />
    ))}
    </LoopScrollTabView>
```