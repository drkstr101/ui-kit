# This file is a template, and might need editing before it works on your project.
FROM node:lts

# Upgrade base sys
RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install bash git -y

# Install Harmony server
RUN npm install --global @teambit/bvm

USER node
ENV HOME="/home/node"
ENV PATH="$PATH:$HOME/bin"
ENV BIT="$HOME/bin/bit"
RUN echo 'export PATH=$PATH:$HOME/bin' >> ~/.bashrc

# start bit dev server
WORKDIR /home/node/wa
COPY --chown=node .bitmap .
COPY --chown=node workspace.jsonc .
RUN export PATH=$PATH:$HOME/bin && \
  bvm install && \
  bit config set analytics_reporting false && \
  bit config set error_reporting false && \
  bit config set no_warnings true && \
  bit init --harmony && \
  bit import

EXPOSE 5000

# Run import in own cache layer
CMD [ "bit", "start", "--port=5000" ]
