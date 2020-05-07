import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { Tabs, Tab, LinearProgress } from '@material-ui/core';
import Table from '../Table';
import Loading from '../Loading';
import SearchInput from '../SearchInput';
import { GET_ALL_PROPOSALS, LOADING_BAR, useStore } from '../../store';

import { tabHeaders, tableColumns } from '../../admin';

import useStyles from './TableTabsStyle';

const tableTitle = tab => `${tab} Proposals`;

const TableTabs = () => {
  const [state, dispatch] = useStore();
  const [tab, setTab] = useState(tabHeaders[0].value);
  const [table, setTable] = useState({
    title: tableTitle(tabHeaders[0].label),
    data: useMemo(() => state.proposals.all)
  });
  const [searchedProposal, setSearchedProposal] = useState('');

  const classes = useStyles();

  useEffect(() => {
    dispatch(LOADING_BAR, true);
    dispatch(GET_ALL_PROPOSALS);
  }, []);

  const tabFilter = tabName =>
    state.proposals.all.filter(
      proposal => tabName === 'All' || proposal.stage === tabName
    );

  const searchFilter = value =>
    tabFilter(tabHeaders[tab].label).filter(proposal =>
      proposal.account.toLowerCase().includes(value.toLowerCase())
    );

  const handleTabsChange = (event, value) => {
    const title = tableTitle(event.target.textContent);
    const data = tabFilter(event.target.textContent);
    const updateTableData = { ...table, title, data };
    setTab(value);
    setTable(updateTableData);
  };

  const handleProposalSearch = value => {
    setSearchedProposal(value);
    // const data = searchFilter(value);
    // const updateTableData = { ...table, data };
    // setTable(updateTableData);
  };

  return (
    // <>
    //   {state.searching.status ? (
    //     <Loading />
    //   ) : (
    <>
      <Suspense fallback={<LinearProgress />}>
        <Tabs
          className={classes.root}
          data-test={'tabs'}
          indicatorColor="secondary"
          onChange={handleTabsChange}
          scrollButtons="off"
          value={tab}
          variant="scrollable">
          {tabHeaders.map(tab => (
            <Tab
              data-test={'tabs-tab'}
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>
        <div className={classes.content}>
          <SearchInput
            onChange={handleProposalSearch}
            placeholder={'Search Proposal...'}
          />
          <Table
            columns={tableColumns}
            data={tabFilter(tabHeaders[tab].label)}
            searchedProposal={searchedProposal}
            title={table.title}
          />
        </div>
      </Suspense>
    </>
    //   )}
    // </>
  );
};

export default TableTabs;
