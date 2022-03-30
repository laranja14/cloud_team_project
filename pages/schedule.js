import { Tab, Icon, Select } from 'semantic-ui-react'

export default function Schedule() {
    const panes = [
        { menuItem: '1주차', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
        { menuItem: '2주차', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
        { menuItem: '3주차', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        { menuItem: '4주차', render: () => <Tab.Pane>Tab 4 Content</Tab.Pane> },
    ]

    const esportLeagueList = [
        { key: "Worlds 2022 Main Event", value: "Worlds 2022 Main Event", start_date: "", end_date: "", text: "Worlds 2022 Main Event" },
        { key: "LCK 2022 Regional Finals", value: "LCK 2022 Regional Finals", start_date: "", end_date: "", text: "LCK 2022 Regional Finals" },
        { key: "LCK 2022 Summer Playoffs", value: "LCK 2022 Summer Playoffs", start_date: "", end_date: "", text: "LCK 2022 Summer Playoffs" },
        { key: "LCK 2022 Summer", value: "LCK 2022 Summer", start_date: "", end_date: "", text: "LCK 2022 Summer" },
        { key: "LCK 2022 Spring Playoffs", value: "LCK 2022 Spring Playoffs", start_date: "", end_date: "", text: "LCK 2022 Spring Playoffs" },
        { key: "LCK 2022 Spring", value: "LCK 2022 Spring", start_date: "", end_date: "", text: "LCK 2022 Spring" }
    ]

    return (
        <div>
            <div style={{ textAlign: "center", margin: "30px" }}>
                <h2>경기 일정 및 결과</h2>
            </div>
            <div class="esport_league_list_wrap" style={{ display: "flex", marginLeft: "150px" }}>
                <Select placeholder='Worlds 2022 Main Event' options={esportLeagueList} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h3>
                    <Icon name='angle left' />
                    2022년 4월
                    <Icon name='angle right' />
                </h3>
            </div>
            <div style={{ margin: "50px 150px 50px 150px", marginLeft: "150px", marginRight: "150px" }}>
                <Tab panes={panes} />
            </div>
        </div>

    )
}
