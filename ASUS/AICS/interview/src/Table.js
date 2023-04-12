import { useEffect, useState, useCallback } from "react";

const THEAD = {
  "severity|verificationStatus": "反應",
  substance: "過敏項目",
  adverseReaction: "症狀",
  hospitalDisplay: "院所",
  recordDateTime: "異動日期"
};

const SEVERITY = {
  severe: {
    value: 2,
    name: '嚴重'
  },
  mild: {
    value: 1,
    name: '輕微',
  },
  unconfirmed: {
    value: 0,
    name: '疑似'
  },
};

const HOSPITAL_MAP = {
  'AAA醫院': '本院',
  '一般醫院': '一般醫院',
};

const noop = () => {};

const Table = ({ data }) => {
  const [tableData, setTableData] = useState([]);
  const [sortSeverity, setSortSeverity] = useState(-1);
  const [sortHospital, setSortHospital] = useState(0);

  useEffect(() => {
    setTableData(data);
  }, []);

  const sortBySeverity = () => {
    let sortData = tableData;

    setSortSeverity((prev) => {
      if (prev === 0 || prev === -1) { // descending sort
        sortData.sort((a, b) => {
          let aValue = -Number.MAX_VALUE;
          if ('severity' in a) {
            aValue = SEVERITY[a['severity']].value;
          } else if ('verificationStatus' in a) {
            aValue = SEVERITY[a['verificationStatus']].value;
          }
          let bValue = -Number.MAX_VALUE;
          if ('severity' in b) {
            bValue = SEVERITY[b['severity']].value;
          } else if ('verificationStatus' in b) {
            bValue = SEVERITY[b['verificationStatus']].value;
          }
          return bValue - aValue;
        });
        prev = 2;
      } else if (prev === 2) { // ascending sort
        sortData.sort((a, b) => {
          let aValue = Number.MAX_VALUE;
          if ('severity' in a) {
            aValue = SEVERITY[a['severity']].value;
          } else if ('verificationStatus' in a) {
            aValue = SEVERITY[a['verificationStatus']].value;
          }
          let bValue = Number.MAX_VALUE;
          if ('severity' in b) {
            bValue = SEVERITY[b['severity']].value;
          } else if ('verificationStatus' in b) {
            bValue = SEVERITY[b['verificationStatus']].value;
          }
          return aValue - bValue;
        });
        prev = 0;
      };
      setTableData(sortData);
      return prev;
    })
  };

  const sortByHospital = () => {
    let sortData = tableData;
    setSortHospital(prev => {
      sortData.sort((a, b) => {
        const aHospital = HOSPITAL_MAP[a['hospitalDisplay']] || '--';
        const bHospital = HOSPITAL_MAP[b['hospitalDisplay']] || '--';
        return prev === 0 ?
          aHospital.localeCompare(bHospital, 'zh-hant') :
          bHospital.localeCompare(aHospital, 'zh-hant');
      });
      prev ^= 1;
      return prev;
    })

    console.log('sortData :>> ', sortData);
    setTableData(sortData);
  }

  const handleTableSort = useCallback((e) => {
    if (e?.target?.dataset?.col === '反應') {
      sortBySeverity();
    } else if (e?.target?.dataset?.col === '院所') {
      sortByHospital();
    } else {
      noop();
    }
  }, [tableData]);

  const renderThead = () => {
    return (
      <li className="thead">
        {Object.values(THEAD).map((thName) => (
          <span
            key={thName}
            data-col={thName}
            title={
              thName === '反應' || thName === '院所' ? 'Click to sort' : ''
            }
            onClick={handleTableSort}>{thName}</span>
        ))}
      </li>
    );
  };

  const getAdverseReaction = (reaction) => {
    let reactions = [];
    if (Array.isArray(reaction)) {
      reaction.forEach((r) => {
        const manifest = r['manifestation']
        if (manifest) reactions.push(manifest)
      })
    }
    return reactions.length > 0 ? reactions.join('、') : '--';
  };

  const getRecordDateTime = (strDate) => {
    const dt = new Date(strDate);
    const formattedDate =
      `${dt.getFullYear().toString().slice(-2)}/${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}`;
    return formattedDate;
  }

  const getSeverityName = (severity) => {
    severity = String.prototype.toLowerCase.call(severity);
    return SEVERITY[severity].name || '';
  }

  const getSeverityClass = (severity) => {
    severity = String.prototype.toLowerCase.call(severity);
    return severity in SEVERITY ? `tag s-${SEVERITY[severity].value}` : 'tag';
  }

  const renderReadableValue = (obj, key) => {
    switch (key) {
      case 'adverseReaction':
        return getAdverseReaction(obj['adverseReaction']);
      case 'hospitalDisplay':
        return HOSPITAL_MAP[obj['hospitalDisplay']];
      case 'recordDateTime':
        return getRecordDateTime(obj['recordDateTime']);
      default: 
        return obj[key];
    }
  }

  const renderTbody = () => {
    const renderCols = Object.keys(THEAD);

    return (
      tableData.map((d, id) => {
        return (
          <li key={id}>
            {renderCols.map((col) => {
              if (col.split("|").length === 2) {
                const names = col.split("|");
                const inters = Object.keys(d).filter(i => names.includes(i));
                return inters.length === 0 ?
                  <span key={col}>--</span> :
                  <span key={col}>
                    <i className={getSeverityClass(d[inters[0]])}>{getSeverityName(d[inters[0]])}</i>
                  </span>;
              } else {
                return (
                  <span key={col}>{renderReadableValue(d, col)}</span>
                );
              }
            })}
          </li>
        );
      })
    );
  };

  return (
    <ul>
      {renderThead()}
      {renderTbody()}
    </ul>
  );
};

export default Table;
