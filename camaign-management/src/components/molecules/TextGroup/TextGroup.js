import React, { PureComponent } from 'react';
import Text from '../../atoms/Text';

class TextGroup extends PureComponent {

  render() {
    const { textList, className } = this.props;
    return (
      <div className={className}>
        { textList.map(({ key, value }) => {
          return (
            <div key={value} className="text-item">
              <Text text={key} inheritedClass="text-key"/>: <Text text={value} inheritedClass="text-value"/>
            </div>
          )
        }) }
      </div>
    );
  }
}


TextGroup.defaultProps = {
  textList: [],
  className: '',
};

export default TextGroup;
