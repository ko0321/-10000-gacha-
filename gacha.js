document.getElementById("gachaButton").addEventListener("click", function() {
    let budget = parseInt(document.getElementById("budget").value); // 選択された予算を取得
    let menu = [
        { name: "Channel U ツアーTシャツM", price: 3800, upperlimit : 4},
        { name: "Channel U ツアーTシャツL", price: 3800, upperlimit : 4},
        { name: "Channel U ツアーTシャツXL", price: 3800, upperlimit : 4},
        { name: "Channel U ツアータオル", price: 2200, upperlimit : 4},
        { name: "Channel  U ツアーアクリルキーホルダー", price: 800, upperlimit : 4},          // 調整用の低価格商品
        { name: "Channel U ジャケ写Tシャツ(ビッグシルエット)M", price: 4200, upperlimit : 4},
        { name: "Channel U ジャケ写Tシャツ(ビッグシルエット)XL", price: 4200, upperlimit : 4},
        { name: "Channel U ツアーラバーバンドオーロラ", price: 600, upperlimit :4},          // 調整用の低価格商品
        { name: "Channel U ツアーラバーバンドクロ", price: 600, upperlimit : 4},          // 調整用の低価格商品
        { name: "ChannelU ツアーマグネット", price: 4500, upperlimit : 4},
        { name: "PLAYER 1Tシャツ(ビッグシルエット)M", price: 4200, upperlimit : 4},
        { name: "PLAYER 1Tシャツ(ビッグシルエット)XL", price: 4200, upperlimit:4},
        { name: "PLAYER 1ミトン", price: 2000, upperlimit :4},
        { name: "PLAYER 1巾着ポーチ", price: 1500, upperlimit : 4},
        { name: "ブロッコリー＆カリフラワーTシャツM", price: 3800, upperlimit : 4},
        { name: "ブロッコリー＆カリフラワーTシャツL", price: 3800, upperlimit : 4},
        { name: "ブロッコリー＆カリフラワーTシャツXL", price: 3800, upperlimit : 4},
        { name: "ブロッコリー＆カリフラワーブランケット", price: 3500, upperlimit : 4},
        { name: "ブロッコリー＆カリフラワークッション", price: 3500, upperlimit : 4},
        { name: "PLAYER 1セットアップ(ナイロン)M", price: 12000, upperlimit : 4},
        { name: "PLAYER 1セットアップ(ナイロン)XL", price: 12000, upperlimit : 4},
        { name: "Channel U ツアーステッカーセット", price: 900,  upperlimit : 4},          // 調整用の低価格商品
        { name: "メッシュバッグ", price: 1000, upperlimit : 4 },
        { name: "ガチャ", price: 150, upperlimit : 10 }          // 調整用の低価格商品
    ];
    
    let selectedItems = [];
    let total = 0;

    // まずランダムにアイテムを選び続ける
    while (total + 300 <= budget) { // 最低価格の商品を考慮して続ける
        let item = menu[Math.floor(Math.random() * menu.length)];
        if (total + item.price <= budget) {
            selectedItems.push(item);
            total += item.price;
        }
    }

    // 最後にギリギリまで詰める
    let remainingBudget = budget - total;
    let cheapItems = menu.filter(item => item.price <= remainingBudget); // 予算内の安い商品を探す

    cheapItems.sort((a, b) => b.price - a.price); // 高い順に並び替え（できるだけ大きい金額で詰める）
    
    for (let item of cheapItems) {
        if (total + item.price <= budget) {
            selectedItems.push(item);
            total += item.price;
        }
    }

    let resultText = selectedItems.map(item => item.name + " (" + item.price + "円)").join(", ");
    document.getElementById("result").innerHTML = `選ばれたメニュー: ${resultText}<br>合計: ${total}円`;
});
